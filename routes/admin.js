const {Router} = require("express")
const jwt = require("jsonwebtoken")
const adminRouter = Router()
const {adminModel, courseModel} = require("../schema/db")
const { adminMiddleware } = require("../middleware/admin")
const e = require("express")


adminRouter.post("/signup",async (req,res)=>{
    const {username,email,password} = req.body;

    try{
        let foundUser = null;

        foundUser = await adminModel.findOne({
        username:username,
        email:email
         })

        if(foundUser){
        res.json({message:"User already exists"})
        return;
        }else{

            await adminModel.create({
                username,
                email,
                password
            })

        res.json({message:"User created succesfully"})
        }

    }catch(err){
        res.json({message:"Coudnt Sign Up" ,err:err})
    }
})


adminRouter.post("/signin", async (req,res)=>{
    const {email,password} = req.body

    try{
        let foundUser = null;

        foundUser = await adminModel.findOne({
            email:email,
        })

        if(foundUser){
            const token = jwt.sign({id:foundUser._id},process.env.ADMIN_SECRET_KEY)

            res.status(200).json({message:"Signed In ! ", token})
        }else{
            res.status(403).json({message:"Invalid credentials"})
        }
    }catch(err){
        res.json({message:"Could not sign in.",err})
    }
})



adminRouter.post("/course",adminMiddleware,async (req,res)=>{
    const adminId = req.userId;

    const {title,description,price,imageUrl} = req.body;

    try{

        const course = await courseModel.create({
            title,
            description,
            price,
            imageUrl,
            creatorId:adminId
        }) 


        res.status(200).json({message:"Course created", courseid:course._id})
    }catch(e){
        res.status(403).json({message:"Could not add course"})
    }
})

adminRouter.put("/course",adminMiddleware,async (req,res)=>{
    const adminId = req.userId;

    const {title,description,price,imageUrl,courseId} = req.body;

    try{
        const course = await courseModel.updateOne({
            _id:courseId,
            creatorId:adminId
        },
        {
            title,
            description,
            price,
            imageUrl
        })

        
        res.status(200).json({message:"Courese upadted ",courseId:course._id})
    }catch(e){
        res.status(403).json({message:"Coudnt not update course"})
    }
})

adminRouter.get("/bulk/course",adminMiddleware, async(req,res)=>{
    const adminId = req.userId;
    
    try{
        const courses = await courseModel.find({
            creatorId:adminId
        })

        
        res.status(200).json({message:"Coureses ",courses})
    }catch(e){
        res.status(403).json({message:"Coudnt not get courses"})
    }

})
module.exports={
    adminRouter
}
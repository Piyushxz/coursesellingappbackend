const {Router} = require("express")

const adminRouter = Router()
const {adminModel} = require("../schema/db")
const { adminMiddleware } = require("../middleware/admin")


adminRouter.post("/signup",async (req,res)=>{
    const {username,email,password} = req.body;

    try{
        let foundUser = null;

        foundUser = await adminModelModel.findOne({
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
        res.json({message:"Coudnt Sign Up" ,err})
    }
})


adminRouter.post("/signin", async (req,res)=>{
    const {email,password} = req.body

    try{
        let foundUser = null;

        foundUser = await adminModel.findOne({
            email:email,
            password:password
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



adminRouter.post("/course",(req,res)=>{
    
})

module.exports={
    adminRouter
}
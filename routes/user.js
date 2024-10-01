const {Router} = require("express")
const {userModel, purchaseModel, courseModel} = require("../schema/db")
const jwt = require("jsonwebtoken")
const {userMiddleware} = require('../middleware/user')
const userRouter = Router()
const {z} = require("zod")
const bcrypt = require("bcryptjs")

userRouter.post("/signup",async (req,res)=>{
    

    const requiredBody = z.object({
        username:z.string().min(3).max(50),
        email:z.string().min(11).max(50).email(),
            
            password:z.string().min(3).max(50)        
                            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
                            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
                            .regex(/[0-9]/, "Password must contain at least one number")
                            .regex(/[\W_]/, "Password must contain at least one special character")
    })
    try{
        const parsedData = requiredBody.safeParse(req.body)
        if(!parsedData.success){
            res.status(400).json({message:"Invalid format",error:parsedData.error})
            return
        }
        const { username, email, password } = parsedData.data;
        const hashedPassword = await  bcrypt.hash(password,5)
        let foundUser = null;

        foundUser = await userModel.findOne({
        username:username,
        email:email
         })

        if(foundUser){
        res.status(409).json({message:"User already exists"})
        return;
        }else{

            await userModel.create({
                username,
                email,
                password:hashedPassword
            })

        res.status(200).json({message:"User created succesfully"})
        }

    }catch(err){
        res.json({message:"Coudnt Sign Up" ,err})
    }
})

userRouter.post("/signin", async (req,res)=>{

    const {email,password} = req.body


    try{
        let foundUser = null;

        foundUser = await userModel.findOne({
            email:email,
        })

        if(!foundUser){
            res.status(403).json({message:"User does not exist"
            })
            return
        }
        const encryptedPassword = bcrypt.compare(password,foundUser.password)
        if(encryptedPassword){
          
            const token = jwt.sign({id:foundUser._id},process.env.SECRET_KEY)
            
            res.status(200).json({message:"Signed In ! ", token,username:foundUser.username})
        }else{
            res.status(403).json({message:"Invalid credentials"})
        }
    }catch(err){
        res.json({message:"Could not sign in.",err})
    }
})


userRouter.get("/purchases",userMiddleware, async(req,res)=>{

    const userId = req.userId;

    try{
        const purchases = await purchaseModel.find({
            userId
        })
    
        const courses = await courseModel.find({
            _id : {$in : purchases.map(x=> x.courseId)}
        })
    
    
        res.json({
            purchases,
            courses
        })
    }catch(e){
        res.status(403).json({message:"Could not get purchases"})
    }



})

module.exports={
    userRouter
}
const {Router} = require("express")
const {userModel} = require("../schema/db")
const jwt = require("jsonwebtoken")
const {userMiddleware} = require('../middleware/user')
const userRouter = Router()



userRouter.post("/signup",async (req,res)=>{
    const {username,email,password} = req.body;

    try{
        let foundUser = null;

        foundUser = await userModel.findOne({
        username:username,
        email:email
         })

        if(foundUser){
        res.json({message:"User already exists"})
        return;
        }else{

            await userModel.create({
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

userRouter.post("/signin", async (req,res)=>{

    const {email,password} = req.body

    try{
        let foundUser = null;

        foundUser = await userModel.findOne({
            email:email,
            password:password
        })

        if(foundUser){
            const token = jwt.sign({id:foundUser._id},process.env.SECRET_KEY)

            res.status(200).json({message:"Signed In ! ", token})
        }else{
            res.status(403).json({message:"Invalid credentials"})
        }
    }catch(err){
        res.json({message:"Could not sign in.",err})
    }
})


userRouter.post("/purchases",(req,res)=>{
    res.json({
        message:"Endpoint"
    })
})

module.exports={
    userRouter
}
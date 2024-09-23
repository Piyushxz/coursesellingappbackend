const {Router} = require("express")



const userRouter = Router()



userRouter.post("/signup",(req,res)=>{
    res.json({
        message:"Endpoint"
    })
})

userRouter.post("/signin",(req,res)=>{
    res.json({
        message:"Endpoint"
    })
})


userRouter.post("/purchases",(req,res)=>{
    res.json({
        message:"Endpoint"
    })
})

module.exports={
    userRouter
}
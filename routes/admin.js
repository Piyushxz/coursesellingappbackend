const {Router} = require("express")




const adminRouter = Router()
const {adminModel} = require("../schema/db")


adminRouter.post("/signup",(req,res)=>{

})


adminRouter.post("/signin",(req,res)=>{
    
})



adminRouter.post("/course",(req,res)=>{
    
})

module.exports={
    adminRouter
}
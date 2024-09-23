const { Router } = require("express")



const courseRouter = Router()




courseRouter.post("/purchase",(req,res)=>{
    res.json({
        message:"Purchase"
    })
})


courseRouter.post("/preview",(req,res)=>{
    res.json({
        message:"preview"
    })
})

module.exports = {
    courseRouter
}
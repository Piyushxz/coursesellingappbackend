const { Router } = require("express")
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../schema/db");



const courseRouter = Router()




courseRouter.post("/purchase",userMiddleware,async (req,res)=>{
    const userId = req.userId;

    const courseId = req.body.courseId;

    try{
        await purchaseModel.create({
            userId:userId,
            courseId:courseId
        })

        res.json({message:"Purchased succesfully"})
    }catch(e){
        res.status(403).json({message:"Could not purchase"})
    }

})


courseRouter.get("/preview",async(req,res)=>{
    try{
        const courses = await courseModel.find({})

        res.status(200).json({courses})
    }catch(e){
        res.status(403).json({message:"Could not fetch courses"})
    }
})

courseRouter.get("/",async(req,res)=>{
    const courseId = req.body.id
    try{
        const course = await courseModel.find({
            _id:courseId
        })

        res.status(200).json({course})
    }
    catch(e){
        res.status(403).json({message:"Could not fetch courses"})
    }
})
module.exports = {
    courseRouter
}
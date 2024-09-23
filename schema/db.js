const mongoose = require("mongoose")
const Schema = require("mongoose")
const ObjectId = mongoose.Types.ObjectId


const userSchema = Schema({
    username : String,
    email : {type : String , unique : true},
    password :String

})
const adminSchema = Schema({
    username : String,
    email : {type : String , unique : true},
    password :String
})


const courseSchema = Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl : String,
    creatorId : ObjectId

})

const purchaseSchema = Schema({
    userId:ObjectId,
    courseId:ObjectId
})


const userModel = mongoose.model("user",userSchema)
const adminModel = mongoose.model("admin",adminSchema)
const courseModel = mongoose.model("course",courseSchema)
const purchaseModel = mongoose.model("purchase",purchaseSchema)




module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}

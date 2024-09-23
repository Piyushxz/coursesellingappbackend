const express = require("express")
const {userRouter} = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");
const mongoose = require("mongoose")
const dotenv = require("dotenv")



const PORT = 3002;
const app = express()


dotenv.config()

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.URL)

        console.log("DB connected")
    }catch(err){
        console.log(err)
    }
}

connectDB()



app.use("/user",userRouter);
app.use("/course",courseRouter)
app.use("/admin",adminRouter)


app.listen(PORT,()=>{
    console.log("App is running")
})





const express = require("express")
const {userRouter} = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");

const PORT = 3002;
const app = express()



app.use("/user",userRouter);
app.use("/course",courseRouter)
app.use("/admin",adminRouter)


app.listen(PORT,()=>{
    console.log("App is running")
})





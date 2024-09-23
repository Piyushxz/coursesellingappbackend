const jwt = require('jsonwebtoken')



const userMiddleware = (req,res,next)=>{
    const token = req.headers.token;

    const decoded = jwt.verify(token,process.env.SECRET_KEY)

    if(decoded){
        req.userId = decoded.id;
        next()

    }else{
        res.status(403).json({message:"Coudnt sign in"})
    }
}

module.exports = {
    userMiddleware
}
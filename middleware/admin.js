const jwt = require('jsonwebtoken')



const adminMiddleware = (req,res,next)=>{
    const token = req.headers.token;

    const decoded = jwt.verify(token,process.env.ADMIN_SECRET_KEY)

    if(decoded){
        req.userId = decoded.id;
        next()

    }else{
        res.status(403).json({message:"Coudnt sign in"})
    }
}

module.exports = {
    adminMiddleware
}
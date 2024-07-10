const jwt=require('jsonwebtoken')

const middleware=async (req,res,next)=>{
    try {
        const token=req.headers['authentication']
        if(!token){
            return res.send("invalid token")
        }
        jwt.verify(token,'password',(err,user)=>{
            if(err)return res.send(err)
            req.user=user
            next();
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports=middleware
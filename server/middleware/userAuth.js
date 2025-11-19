import jwt from "jsonwebtoken";

export const userAuth =async (req,res,next)=>{
    const {token}=req.cookies;

    if(!token)
        return res.status(400).json({success:false, message:"Not Logged in"});
    try {
        const decodedToken =jwt.verify(token,process.env.JWT_SECRET);
        if(decodedToken.id){
            //req.body.id=decodedToken.id;
            req.user = decodedToken;
            
        }else{
            return res.status(400).json({success:false, message:"Unauthorised"});
        }
   
        //calling controller
        next()
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
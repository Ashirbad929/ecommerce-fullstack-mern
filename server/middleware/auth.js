const admin=require('../firebase/index');
const User=require('../models/user')
exports.authCheck=async(req,res,next)=>{
    console.log(req.headers.authtoken)
    
    try {
        const firebaseUser=await admin.auth()
        .verifyIdToken(req.headers.authtoken);
        console.log("firebase user in authcheck ###",firebaseUser);
        req.user=firebaseUser;
        next();


        
    } catch (error) {
        console.log(error)
        res.status(401).json({
            err:"Invalid or expired token"
        })
        
    }
    
}
exports.adminCheck=async(req,res,next)=>{
    const {email}=req.user
    const adminUser=await User.findOne({email})
    if(adminUser.role!='admin'){
        res.status(403).json({
            err:'Admin resource.Access denied',

        })
    }else{
        next();
        
    }
}
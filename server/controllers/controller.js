const User=require('../models/user')
exports.createorupdateuser=async(req,res)=>{
    const {name,picture,email}=req.user;
    const user=await User.findOneAndUpdate(
        {email:email},
        {
            name:email.split('@')[0]
            ,picture
        },
        {new:true});
        if(user){
            console.log('user updated',user)
            res.json(user);

        }else{
            const newUser=await new User({
                email,
                name:email.split('@')[0],
                picture
            }).save();
            console.log('user created',newUser)
        }


   
};
exports.currentuser = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.user.email }).exec();
      return res.json(user);
    } catch (err) {
      throw new Error(err);
    }
  };
  
    
exports.b=(req,res)=>{
    res.json({
        data:"hi yes"
    })
};

const cloudinary = require("cloudinary");

// config cloudinary
cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.API_KEY}`,
  api_secret: `${process.env.API_SECRET}`,
});

exports.upload = async (req, res) => {
  let result = await cloudinary.uploader.upload(req.body.image, {
    public_id: `${Date.now()}`,
    resource_type: "auto", //jpeg,png etc
  });
  res.json({ public_id: result.public_id, url: result.secure_url });
  console.log(result)
};
exports.remove = async (req, res) => {

    let image_id=req.body.public_id
    cloudinary.uploader.destroy(image_id,(err,res)=>{
        if(err){return res.json({success:false,err})}

        res.status(200).send('ok')
    })
};

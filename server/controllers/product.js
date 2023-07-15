const Product=require('../models/product')
const slugify=require('slugify')
exports.create=async(req,res)=>{
    try {
        console.log(req.body);
        req.body.slug=slugify(req.body.title);//add slug to request body
        const newProduct=await new Product(req.body).save()
        res.json(newProduct)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message }); //send error with status code
        
    }
}
//public route no middleware getting all the products
exports.read=async(req,res)=>{
    let products=await Product.find({});
    res.json(products);

}
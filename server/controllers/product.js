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
        res.status(400).send('create product failed')
        
    }
}
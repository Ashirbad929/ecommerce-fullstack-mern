const Product = require("../models/product");
const slugify = require("slugify");
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.title); //add slug to request body
    const newProduct = await new Product(req.body).save();
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message }); //send error with status code
  }
};
//public route no middleware getting all the products
exports.listAll = async (req, res) => {
  let products = await Product.find({})
    .limit(parseInt(req.params.count))
    .populate()
    .populate()
    .sort();
  res.json(products);
};
exports.remove = async (req, res) => {
  try {
    console.log(req.params.slug);
    const deleted = await Product.findOneAndRemove({ slug: req.params.slug });
    console.log("deleted");
    console.log(deleted);
    res.json(deleted);
  } catch (error) {
    console.log(error);
    return res.status(400).send("product delete failed");
  }
};
exports.read = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug })
    .populate("category")
    .populate("subs");
  res.json(product);
};
exports.update = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updated = await Product.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message }); //send error with status code
  }
};
// exports.list=async(req,res)=>{
//   try {
//     const {sort,order,limit}=req.body;
//     const products=await Product.find({})
//     .populate('category')
//     .populate('subs')
//     .sort([[sort,order]])
//     .limit(limit)

//     // return products
//     res.json(products)
//   } catch (error) {
//     console.log(error)

//   }
// }
//with pagination
exports.list = async (req, res) => {
  try {
    const { sort, order, page } = req.body;
  const currentPage = page || 1; //if page is not there we use default 1
  const perPage = 4;
  const products = await Product.find({})
  .skip((currentPage - 1) * page)
  .populate("category")
  .populate("subs")
  .sort([[sort,order]])
  .limit(perPage)
  .exec();
  res.json(products)
  } catch (error) {
    console.log(error)
    
  }


};

exports.productsCount = async (req, res) => {
  try {
    const estimate = await Product.estimatedDocumentCount();
    res.json(estimate);
    console.log("yes");
    console.log("ccc", estimate);
  } catch (error) {
    console.log(error);
  }
};

const Category = require("../models/category");
const Sub = require("../models/sub");
const Product=require("../models/product")

const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await new Category({ name, slug: slugify(name) }).save();
    res.json(category);
  } catch (error) {
    res.status(400).send("Create category failed");
  }
};
exports.list = async (req, res) => {
  res.json(await Category.find({}).sort({ createdAt: -1 }));
};
exports.read = async (req, res) => {
  const category = await Category.findOne({ slug: req.params.slug });
  // res.json(category);
 const products=await Product.find({category:category})
  .populate('category')
  .exec()

  res.json({
    category,products
  })


};
exports.update = async (req, res) => {
  const { name } = req.body;
  console.log(name+"woho")

  try {
    const updated = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(updated);
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(400).json({ error: 'Failed to update category' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (error) {
    res.status(400).send("deletion falied");
  }
};
exports.getSubs = async (req, res) => {
  try {
    const parentId = req.params._id; // Assuming you're passing the parent category ID as "_id" in the request params

    const subs = await Sub.find({ parent: parentId }); // Find subcategories where the parent field matches the given parent ID
    res.json(subs);
  } catch (error) {
    res.status(400).send("Failed to fetch subcategories");
  }
};

const Sub = require("../models/sub");
const slugify = require("slugify");
exports.create = async (req, res) => {
  try {
    const { name,parent } = req.body;
    const sub = await new Sub({ name,parent, slug: slugify(name) }).save();
    res.json(sub);
  } catch (error) {
    res.status(400).send("Create sub failed");
    console.log(error.message)
  }
};
exports.list = async (req, res) => {
  res.json(await Sub.find({}).sort({ createdAt: -1 }));
};
exports.read = async (req, res) => {
  const sub = await Sub.findOne({ slug: req.params.slug });
  res.json(sub);
};
exports.update = async (req, res) => {
  const { name } = req.body;
  console.log(name+"woho")

  try {
    const updated = await Sub.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Sub not found' });
    }

    res.json(updated);
  } catch (error) {
    console.error('Error updating sub:', error);
    res.status(400).json({ error: 'Failed to update sub' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Sub.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (error) {
    res.status(400).send("deletion falied");
  }
};

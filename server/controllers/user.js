const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");

exports.userCart = async (req, res) => {
  console.log(req.body);
  const { cart } = req.body;
  let products = [];
  const email = req.user.email;

  const user = await User.findOne({ email });
  //check if cart with logged in user id already exists
  let cartExistByThisUser = await Cart.findOne({ orderdBy: user._id }).exec();

  if (cartExistByThisUser) {
    cartExistByThisUser.remove();
    console.log("removed old cart");
  }

  for (let i = 0; i < cart.length; i++) {
    let object = {};
    object.product = cart[i]._id;
    object.count = cart[i].count;
    object.color = cart[i].color;

    //get price for getting total
    let { price } = await Product.findById(cart[i]._id).select("price").exec();
    object.price = price;
    products.push(object);
  }

  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal = cartTotal + products[i].price * products[i].count;
  }

  console.log("cartTotal", cartTotal);

  // Create a new cart instance and save it
  let newCart = await new Cart({
    products,
    cartTotal,
    orderdBy: user._id,
  }).save();

  res.json({ ok: true });
};

exports.getuserCart = async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  let cart = await Cart.findOne({ orderdBy: user._id }).populate(
    "products.products",
    "_id title price totalAfterDiscount"
  );

  if (!cart || !Array.isArray(cart.products) || cart.products.length === 0) {
    // If cart is null or products array is empty, return an empty cart or an appropriate response.
    return res.json({ products: [], cartTotal: 0, totalAfterDiscount: 0 });
  }

  const { products, cartTotal, totalAfterDiscount } = cart;

  res.json({ products, cartTotal, totalAfterDiscount });
};
exports.addToWishlist = async (req, res) => {
  const { productId } = req.body; // Extract the productId from the request body
  const user = await User.findOneAndUpdate(
    { email: req.user.email },
    { $addToSet: { wishlist: productId } }
  ).exec();
  res.json({ ok: true });
};

exports.Wishlist = async (req, res) => {
  // Wishlist function logic here
  const list = await User.findOne({ email: req.user.email })
    .select("wishlist")
    .populate("wishlist")
    .exec();
  res.json(list);
};

exports.removefromWishlist = async (req, res) => {
  // removefromWishlist function logic here
  const { productId } = req.params;
  const user = await User.findOneAndUpdate(
    { email: req.user.email },
    { $pull: { wishlist: productId } }
  ).exec();
  res.json({ ok: true });
};

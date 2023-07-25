const express = require('express');
const router = express.Router();
const { authCheck } = require("../middleware/auth");
const { userCart, getuserCart, removefromWishlist, Wishlist, addToWishlist } = require("../controllers/user");

router.post('/user/cart', authCheck, userCart);
router.get('/user/cart', authCheck, getuserCart);

// wishlist
router.post('/user/wishlist', authCheck, addToWishlist);
router.get('/user/wishlist', authCheck, Wishlist); // Assuming this route is for fetching the wishlist
router.put('/user/wishlist/:productid', authCheck, removefromWishlist);

module.exports = router;

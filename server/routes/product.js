const express = require("express");
const router = express.Router();
// middlewares
const { authCheck, adminCheck } = require("../middleware/auth");
// controllers
const {
  create
  
} = require("../controllers/product.js"); //make sure to destructure to get the callback function
router.post("/product", authCheck, adminCheck, create);


module.exports = router;

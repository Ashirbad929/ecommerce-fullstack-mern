const express = require("express");
const router = express.Router();
// middlewares
const { authCheck, adminCheck } = require("../middleware/auth");
// controllers
const {
  create,
  listAll,
  remove,
  read,
  update
  
} = require("../controllers/product.js"); //make sure to destructure to get the callback function
router.post("/product", authCheck, adminCheck, create);
router.get("/products/:count", listAll);//show products this will be public
router.delete('/product/:slug',authCheck,adminCheck,remove)
router.get('/product/:slug',read)
router.put('/product/:slug',authCheck,adminCheck,update)

module.exports = router;

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
  update,
  list,
  productsCount,
  productStar
  
} = require("../controllers/product.js"); //make sure to destructure to get the callback function
router.post("/product", authCheck, adminCheck, create);
router.post('/products/total',productsCount)
router.get("/products/:count", listAll);//show products this will be public
router.delete('/product/:slug',authCheck,adminCheck,remove)
router.get('/product/:slug',read)
router.put('/product/:slug',authCheck,adminCheck,update)

router.post('/products',list)
// star  rating request
router.put('/product/star/:productId',authCheck,productStar)  //authcheck cause only logged in user can give ratings




module.exports = router;

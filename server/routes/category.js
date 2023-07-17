const express = require("express");
const router = express.Router();
// middlewares
const { authCheck, adminCheck } = require("../middleware/auth.js");
// controllers
const {
  create,
  read,
  update,
  remove,
  list,
  getSubs
} = require("../controllers/category.js"); //make sure to destructure to get the callback function

router.get('/category/subs/:_id',getSubs)
router.post("/category", authCheck, adminCheck, create);
router.get("/categories", list);
router.get("/category/:slug", read);
router.put("/category/:slug", authCheck, adminCheck, update);
router.delete("/category/:slug", authCheck, adminCheck, remove);


module.exports = router;

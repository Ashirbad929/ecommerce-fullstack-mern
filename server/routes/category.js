const express=require('express')
const router=express.Router()
// middlewares
const {authCheck,adminCheck}=require('../middleware/auth')
// controllers
const {create,read,update,remove,list}=require('../controllers/category.js') //make sure to destructure to get the callback function 
router.post('/category',authCheck,adminCheck,create);
router.get('./categories',list)
router.post('./category/:slug',authCheck,adminCheck,update)
router.post('./category/:slug',authCheck,adminCheck,remove)



module.exports=router;


const express=require('express')
const router=express.Router()
const {authCheck,adminCheck}=require('../middleware/auth')

const {createorupdateuser,currentuser}=require('../controllers/controller.js') //make sure to destructure to get the callback function 
router.post('/create-or-update-user',authCheck,createorupdateuser);
router.post('/current-user',authCheck,currentuser);
router.post('/current-admin',authCheck,adminCheck,currentuser);



module.exports=router;


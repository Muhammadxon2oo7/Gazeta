const express=require('express')
const router=express.Router()
const authController=require('../authController/authController')

router.post('/register',authController.register_post)
router.post('/log_in',authController.log_in_post)


module.exports=router
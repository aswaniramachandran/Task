const express=require('express')

const router=express.Router()

const {register,login,logout}=require('../Controller/authController')

router.post('/registers',register)
router.post('/logins',login)
router.post('/logouts',logout)

module.exports=router;
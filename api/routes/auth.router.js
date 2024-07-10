const express=require('express')
const {signup,signin,data}=require('../controllers/auth.controllers');
const middleware = require('./middleware');
const router=express.Router();

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/data',middleware,data)
module.exports=router
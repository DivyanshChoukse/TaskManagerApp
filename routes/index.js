const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');
console.log('router loaded');
router.get('/',homeController.home);
router.use('/add-task',require('./add-task'));
router.use('/delete-task',require('./delete-task'));
module.exports=router;
const express= require('express');
const router=express.Router();

const{ InfoController}=require('../../controllers');
const tweetRouts= require('./tweet-routes');

router.get('/info',InfoController.info);
router.use('/tweets',tweetRouts);


module.exports=router
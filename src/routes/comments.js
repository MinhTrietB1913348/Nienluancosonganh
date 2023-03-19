const express = require('express');
const router = express.Router();

const commentController= require('../app/controllers/CommentController');
//const middlewareController=require('../app/controllers/MiddlewareController');

router.post('/input',commentController.inputcomment);
// router.get('/',commentController.index);
module.exports=router;
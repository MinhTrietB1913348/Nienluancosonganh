const express = require('express');
const router = express.Router();

const meController= require('../app/controllers/MeController');
const middlewareController=require('../app/controllers/MiddlewareController');
router.get('/stored/products',middlewareController.verfyTokenandAdminAuth,meController.storedProducts);
module.exports=router;
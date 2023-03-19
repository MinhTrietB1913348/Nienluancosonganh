const express = require('express');
const router = express.Router();

const productController= require('../app/controllers/ProductController');
const middlewareController=require('../app/controllers/MiddlewareController');
//router.get('/search1/:nameprice',productController.searchprice);
router.delete('/:id', middlewareController.verfyTokenandAdminAuth, productController.delete);
router.get('/search/:searchname',productController.search);
router.get('/create',middlewareController.verfyTokenandAdminAuth,productController.create);
router.post('/input',middlewareController.verfyTokenandAdminAuth,productController.input);
router.get('/:id/edit',middlewareController.verfyTokenandAdminAuth,productController.edit);
router.put('/:id',middlewareController.verfyTokenandAdminAuth,productController.update);
router.get('/:slug',productController.show);

module.exports=router;
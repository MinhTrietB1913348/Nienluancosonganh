const express = require('express');
const middlewareController = require('../app/controllers/MiddlewareController');
const router =express.Router();

const useradminController=require('../app/controllers/UseradminController');

//  router.delete('/:id1/:id2',userController.deleteuser);
//router.delete('/:id',middlewareController.verfyTokenandAdminAuth,userController.deleteuser);
// router.get('/',userController.getAllUsers);
router.get('/',middlewareController.verfyTokenandAdminAuth,useradminController.index);
router.delete('/:id',middlewareController.verfyTokenandAdminAuth,useradminController.delete);
module.exports=router;



const express = require('express');
const router =express.Router();
const billController=require('../app/controllers/BillController');

router.post('/hoadon',billController.Bill);
router.get('/hoadon',billController.Bill);
router.get('/show',billController.index);
router.delete('/:id', billController.delete);
router.get('/thongke', billController.thongke);
module.exports=router;



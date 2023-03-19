const express = require('express');//thêm express từ thư viên
const router = express.Router();

const newsController=require('../app/controllers/NewsController');

router.get('/',newsController.index);

router.get('/:id', newsController.shownew)

module.exports = router;//định nghĩa 1 biến router
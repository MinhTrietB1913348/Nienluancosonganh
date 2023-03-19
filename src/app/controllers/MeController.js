const Product= require('../models/Product');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class MeController{
    storedProducts(req,res,next){
        Product.find({})
        .then(products=>res.render('me/stored-products',{
            products:mutipleMongooseToObject(products)
        }))
        .catch(next);
    }

}

module.exports=new MeController();
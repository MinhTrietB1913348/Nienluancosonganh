const Cart=require("../models/Cart");
const Product = require('../models/Product');
const {mongooseToObject} = require('../../util/mongoose');
const CartController={
    Createcart: async(req,res)=>{
        try{
            const productId = req.params.id;
            const cart = await new Cart(req.session.cart ? req.session.cart : {});
            Product.findById(productId, function (err, product) {
                if(err) {
                    return res.redirect('/');
                }
                cart.add(product, product.id);
                
                req.session.cart = cart;
                console.log(req.session.cart);
                res.redirect('/carts');
        })
        }catch(err){
            res.status(500).json(err);
        }
    },
}

module.exports=CartController;
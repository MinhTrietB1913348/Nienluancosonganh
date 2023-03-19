const express = require('express');
const router =express.Router();
const Cart = require('../app/models/Cart');
const cartController =require('../app/controllers/CartController');


router.get('/add-to-cart/:id',cartController.Createcart );//function (req, res) )//{
    // const productId = req.params.id;
    // const cart = new Cart(req.session.cart ? req.session.cart : {});

    // Product.findById(productId, function (err, product) {
    //     if(err) {
    //         return res.redirect('/');
    //     }
    //     cart.add(product, product.id);
    //     req.session.cart = cart;
    //     cart.save();
    //     console.log(req.session.cart);
    //     res.redirect('/carts');
    // })

//});


router.get('/reduce/:id', function (req, res, next) {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/carts');
});

router.get('/remove/:id', function (req, res, next) {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/carts');
});

router.get('/', function (req, res, next) {
    if(!req.session.cart) {
        return res.render('shop/cart', {products: null});
    }
    const cart = new Cart(req.session.cart);
    var total = 0;
      cart.generateArray().forEach(element => {
            total += parseInt(element.item.price) * parseInt(element.qty) 
    });
    return res.render('shop/cart', {products: cart.generateArray(), totalPrice: total});
    
});





module.exports = router;
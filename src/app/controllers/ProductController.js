const Product= require('../models/Product');
const Comment= require('../models/Comment');
const User  = require("../models/User")
const Group  = require("../models/Group")
const {mongooseToObject} = require('../../util/mongoose');
const {mutipleMongooseToObject} = require('../../util/mongoose');
class ProductController{
    show(req, res,next){
        Product.findOne({slug: req.params.slug})
            .then(product => {
                Comment.find({id_product: product._id})
                    .then(comment=>{
                        var a = []
                        for (var i = 0; i < comment.length; i++){
                            a[i] = comment[i].id_user
                        }
                        User.find({_id: {$in: a}})
                            .then(user => {
                                res.render('products/show', {product: mongooseToObject(product),comment: mutipleMongooseToObject(comment), user:  mutipleMongooseToObject(user)});
                            })
                            .catch(next)
                        
                        //res.json({product,comment});
                    })
                    .catch(next);
                    
            })
            .catch(next)
    }

    create(req, res, next){
        res.render('products/create');
    }

    input(req, res, next){
        const product = new Product(req.body);
        product.save()
            // Group.find()
            // .then((group)=> res.redirect('/', {group: mongooseToObject(group)}))
            .then(()=>res.redirect('/'))
            .catch(eror =>{

            });
    }
    edit(req,res,next){
        Product.findById(req.params.id)
            .then(product => {
                res.render('products/edit', {product: mongooseToObject(product)});
            })
            .catch(next);
    }

    update(req,res,next){
        Product.updateOne({_id: req.params.id},req.body)
            .then(()=>res.redirect('/me/stored/products'))
            .catch(next);
    }

    delete(req, res, next) {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }


    search(req,res,next){
        Product.find({name:{$regex: req.params.searchname}})
             .then(products=>{
                res.render('home',{
                     products:mutipleMongooseToObject(products)
                });
                //res.json(products);
            })
            .catch(next);
    }

    // searchprice(req,res,next){
    //     Product.find({pricerange:{$regex: req.params.nameprice}})
    //          .then(products=>{
    //             res.render('home',{
    //                  products:mutipleMongooseToObject(products)
    //             });
    //             //res.json(products);
    //         })
    //         .catch(next);
    // }
    




    // AddDetail(req,res,next){
    //    try{
    //         const cart = Cart.findOneAndUpdate({id_account: user._id})
    //     }catch(err){
    //         res.status(500).json(err);
    //     }
    // }
}

module.exports=new ProductController();
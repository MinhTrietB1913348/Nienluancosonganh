const Bill = require('../models/Bill');
const {mongooseToObject, mutipleMongooseToObject} = require('../../util/mongoose');
const User = require("../models/User")
const Product = require("../models/Product")
class BillController {
    Bill(req, res, next) {
        User.findOne({token: {$ne: "logout"}})
            .then(user => {
                 Bill.create({id_product: req.body.id_product,price:req.body.price, id_user: user._id,address: user.address,phone: user.phone,nameuser:user.username,})
                    .then((bill)=> {
                        Product.findById(bill.id_product)
                            .then((product)=>{
                            res.render("showHoaDon", {
                                product: mongooseToObject(product),
                                user: mongooseToObject(user),
                                bill: mongooseToObject(bill)
                        })
                    })
                    })
                    .catch(eror =>{});
            })
            .catch()
      }
    index(req, res,next){
        Bill.find()
            .then(bill => {
                res.render('bill', {bill: mutipleMongooseToObject(bill)});
                //res.json({user});
            })
            .catch(next)
}
    thongke(req, res,next){
            Bill.aggregate(
                        [{
                            $group:
                            {
                                _id:null,
                                sum: {$sum: "$price"},
                            }
                        }]
                    )
                .then(bill => {
                    res.render('thongke', [{sum: (bill)}]);
                    //res.json({sum: bill});
                })
                .catch(next)
    }
    delete(req, res, next) {
    Bill.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new BillController;
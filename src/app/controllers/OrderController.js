const{mutipleMongooseToObject}= require('../../util/mongoose');
const User = require('../models/User');
const Cart=require('../models/Cart')
const Product=require('../models/Product')
class UseradminController{
    index(req, res,next){
        User.find({token: {$ne: "logout"}})
            .then(user =>{
                res.render('order', {user: mutipleMongooseToObject(user)});
            })
            .catch(next);
    }
}

            
            




module.exports= new UseradminController


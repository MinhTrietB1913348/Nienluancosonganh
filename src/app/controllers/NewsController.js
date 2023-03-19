const New = require('../models/New');
const{mutipleMongooseToObject}= require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');
class NewsController{
    index(req,res,next){

        New.find({})
            .then(news => {
                res.render('news',{
                    news: mutipleMongooseToObject(news)
                });
            })
            .catch(next);
    
}
shownew(req,res,next){
    New.findOne({_id: req.params.id})
            .then(news => {
                // res.render('',{
                //     news: mongooseToObject(news)
                // });
                res.json(news)
            })
            .catch(next);
    }
}


module.exports= new NewsController


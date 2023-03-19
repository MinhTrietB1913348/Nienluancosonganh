const{mutipleMongooseToObject}= require('../../util/mongoose');
const User = require('../models/User');
class UseradminController{
    index(req, res,next){
        User.find()
            .then(user => {
                res.render('user/index', {user: mutipleMongooseToObject(user)});
                //res.json({user});
            })
            .catch(next)
    }
    delete(req, res, next) {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

}

module.exports= new UseradminController


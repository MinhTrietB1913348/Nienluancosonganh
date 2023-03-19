const Comment = require('../models/Comment');
const{mutipleMongooseToObject}= require('../../util/mongoose');
const User = require('../models/User');
class CommentsController{
    // index(req,res,next){
    //     Comment.find({})
    //         .then(comments => {
    //             res.render('comments',{
    //                 comments: mutipleMongooseToObject(comments)
    //             });
    //         })
    //         .catch(next);
    // }



    inputcomment(req, res, next){
        const comment = new Comment(req.body);
        User.findOne({token: {$ne: "logout"}})
            .then(user => {
                 Comment.create({content: req.body.content, id_product: req.body.id, id_user: user._id, point:req.body.point})
                    .then(()=> {
                        res.render("binhluan");
                        //res.json('Đã đăng bình luận')
                    })
                    .catch(eror =>{
                    });
            })
            .catch()
       
    }
}

module.exports= new CommentsController


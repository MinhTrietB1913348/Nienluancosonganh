const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment =new Schema({
    content: {type: String},
    id_product: {
        type: Schema.Types.ObjectId,
        ref:'products'
    },
    id_user: {
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    point: {
        type: Number,
    }
});

module.exports=mongoose.model('Comment',Comment);
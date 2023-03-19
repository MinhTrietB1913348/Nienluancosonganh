const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bill = new Schema({
    id_user:{type: Schema.Types.ObjectId},
    nameuser:{type: String},
    price:{type: Number},
    address:{type: String },
    phone:{type: String},
    id_product:{type: Schema.Types.ObjectId},
});

module.exports = mongoose.model('Bill', Bill);
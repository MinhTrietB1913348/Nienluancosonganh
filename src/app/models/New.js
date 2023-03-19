const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const New =new Schema({
    newspaper: {type :String, default: ''},
    test: {type:String, maxLength: 600},
    image: {type: String, maxLength: 255},
    createdAt:{type: Date, default: Date.now},
    updateAt:{type: Date, default: Date.now},
});

module.exports=mongoose.model('New',New);
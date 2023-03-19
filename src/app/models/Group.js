const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group =new Schema({
    namegroup: {type: String},
});

module.exports=mongoose.model('Group',Group);
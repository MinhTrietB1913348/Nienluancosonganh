const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;




const Product =new Schema({
    name: {type :String, default: ''},
    discription: {type:String, maxLength: 600},
    img: {type: String, maxLength: 255},
    price: {type:Number, maxLength: 600},
    videoId:{ type: String},
    slug:{type: String, slug:'name'},
    id_new:[{
        type: Schema.Types.ObjectId,
    }],
    id_group:{type: Schema.Types.ObjectId},
    id_cart: [{
        type: Schema.Types.ObjectId,
    }]
},{
    timestamps: true,
});

module.exports=mongoose.model('Product',Product);
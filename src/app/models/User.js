const mongoose= require("mongoose");


const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,

    },
    admin:{
        type: Boolean,
        default: false, 
    },
     
    token: {type: String},

    address:{
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
}, {timestamps:true,}



);

module.exports=mongoose.model("User",userSchema);


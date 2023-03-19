const mongoose= require('mongoose');

async function connect (){
    try{
        await mongoose.connect('mongodb://localhost:27017/client_phone_dev');
        console.log('Connect success');
    }catch(error){
         console.log('Connect error success');
    }
}

module.exports={connect};
const mongoose= require('mongoose')
 const Hotel  = new mongoose.Schema({
     title:{
         type: String,
         required:true
     },
     name:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    url:{
        type: String,
        required:true
    }

 })

 module.exports=mongoose.model('hotels',Hotel)
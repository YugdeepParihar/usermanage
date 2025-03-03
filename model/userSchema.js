const mongoose=require('mongoose')

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
    },
    googleID:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model('user',schema);
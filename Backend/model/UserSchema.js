const mongoose = require('mongoose');


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:50
    },
    age:{
        type:Number,
        required:true
        
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=mongoose.model('User',userSchema)

module.exports =User
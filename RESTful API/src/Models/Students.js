//Schema and Models
const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minglength:3,
    },
    age:{
        type:Number,
        
    },
    email:String,
    password:String,
    gender:String,
    address:String,
    city:String,
    state:String,
    reg_No:Number,
    class:Number,
    phone:Number,

})
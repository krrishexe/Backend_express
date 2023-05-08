//Schema and Models
const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
    age:{
        type:Number,
        min:3,
        max:18,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email-Id already exists"],
    },
    password:{
        type:String,
        required:true,
    },
    gender:String,
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:String,
    reg_No:{
        type:Number,
    },
    class:{
        type:Number,
        minlength:1,
        maxlength:12,
    },
    phone:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10,
        unique:[true,"Phone-Number already exists"],
    },
})

const student = new mongoose.model("student",studentSchema);

module.exports = student;
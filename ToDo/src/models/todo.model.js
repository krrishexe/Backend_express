const mongoose = require('mongoose');
// const validate = require('validate');
const todoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        unique:[true,"Name already taken"]
    },
    title:{
        type:String,
        required:true,
        minlength:2
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        unique:[true,"Image already taken"]
    }
},{
    timestamps:true
})

const Todo = new mongoose.model('Todo',todoSchema)

module.exports = Todo
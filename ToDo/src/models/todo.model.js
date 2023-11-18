const mongoose = require('mongoose');

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
    }
},{
    timestamps:true
})

const Todo = new mongoose.model('Todo',todoSchema)

module.exports = Todo
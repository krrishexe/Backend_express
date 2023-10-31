import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    {
        content:{
            type:String,
            required:true,
        },
        complete:{
            type:Boolean,
            default:false,
        },
        createdBy:{
            type:mongoose.Schema.types.ObjectId,
            ref:'student'
        }
    }
},{
    timestamps:true
})

const subTodo = new mongoose.model('subTodo',subTodoSchema)
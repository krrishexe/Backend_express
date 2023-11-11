import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,    // created by which user.
        ref:"student"                           // give reference of the student model.
    },
    subTodos:[           // array of subtodos.
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"subTodo"
        }
    ]
},{timestamps: true});

export const Todo = new mongoose.model('Todo',todoSchema)
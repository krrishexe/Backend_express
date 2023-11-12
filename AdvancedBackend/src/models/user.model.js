import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Video'
        }
    ],
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true //for searching.
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true //for searching.
    },
    avatar:{
        type:String,  //cloudinary url
        required:true,
    },
    coverImage:{
        type:String,
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    },
    refreshToken:{
        type:String,
    },
    coverImage:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

//pre is an inbuilt method of schema , as the name sugest , before saving the data into db , run this piece of code.

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,8)
        next()
    }
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}
export const User = new mongoose.model(`User`,userSchema)
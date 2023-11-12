import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
    videoFile:{
        type:String,
        required:[true,"Video is required"]
    },
    thumbnail:{
        type:String,
        required:[true,"Thumbnail is required"]
    },
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    duration:{
        type:Number,
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'User'
        required:true
    },
    coverImage:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = new mongoose.model(`Video`,videoSchema)
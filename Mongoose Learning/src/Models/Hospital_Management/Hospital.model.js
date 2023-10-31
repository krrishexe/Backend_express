import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    address1:{
        type:String,
        required:true,
        unique:true,
    },
    address2:{
        type:String,
    },
    landmark:{
        type:String,
    },
    city:{
        type:String,
        required:true,
    },
    pincode:{
        type:String,
        required:true,
    },
    specializedIn:[
        {
            type:String
        }
    ],
    
},{
    timestamps:true
})

export const Hospital = new mongoose.model('Hospital',hospitalSchema)
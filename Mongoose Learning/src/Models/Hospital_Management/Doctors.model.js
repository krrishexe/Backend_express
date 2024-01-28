import mongoose from "mongoose";

const worksInHospitals = new mongoose.Schema({
    numberOfHospitals:{
        type:Number,
        required:true
    },
    hospitalNames:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    },
    numberOfHours:{
        type:Number,
        required:true,
    }

})

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    expeirence:{
        type:Number,
        required:true,
        default:0,
    },
    qualifications:{
        type:String,
        required:true,
    },
    worksInHospitals:{worksInHospitals},

},{
    timestamps:true
})

export const Doctor = mongoose.model("Doctor",doctorSchema)
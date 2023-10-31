import mongoose, { mongo } from "mongoose";

const worksInHospitalsSchema = mongoose.Schema({
    hospitalName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hosptial'
    },
    numberOfhours:{
        type:Number,
        required:true
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary:{
        type:Number,
        required: true
    },
    qualifications:{
        type: String,
        required: true
    },
    expInYears:{
        type: Number,
        default: 0,
    },
    worksInHospitals:{
        type:[worksInHospitalsSchema]
    }

},{
    timestamps:true
})

export const Doctor = new mongoose.model('Doctor',doctorSchema)
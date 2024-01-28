import mongoose, { connections } from "mongoose";
import express from "express";

const connection = async () =>{
    try {
        const conn =  mongoose.connect("mongodb://localhost:2017")
        
        
    } catch (error) {
        console.log("MongoDB connection error : "+ error)
        process.exit(1);
    }
}
export default connection
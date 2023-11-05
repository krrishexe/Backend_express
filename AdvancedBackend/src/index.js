import { createRequire } from 'module';
const require = createRequire(import.meta.url); // to use require syntax of dotenv.
require('dotenv').config()
import mongoose from 'mongoose'
// import { DB_NAME } from './constants.js';
import express from 'express';
import connectDB from './db/index.js';
const app = express();

connectDB()












// 2nd method of connecting to Database. 

/*
;(async()=>{
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        //agar koi error aagya to
        app.on('error',(error)=>{
            console.log("Server cant connect to DB : " , error)
            throw new error
        })
        // agar chal gaya to

        app.listen(process.env.PORT,()=>{
            console.log(`Server listening on port ${process.env.PORT}`)
        })


    } catch (error) {
        console.log("Error :" ,error)
    }
})()
*/
import dotenv from "dotenv"
import mongoose from 'mongoose'
import connectDB from './db/index.js';
import {app} from "./app.js"
dotenv.config({
                        //Dotenv is made available in only one file that is index.js and we are using the import syntax so please check pckage.json -- dev script before using dotenv i.e. --> 
    path: './env'
})
// console.log(process.env)
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`⚙️ Server is running at ${process.env.PORT}`)
    })
})
.catch(err => console.log("MongoDB connection error: " + err))









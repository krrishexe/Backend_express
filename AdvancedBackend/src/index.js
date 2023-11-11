import dotenv from "dotenv"
import mongoose from 'mongoose'
import connectDB from './db/index.js';
import {app} from "./app.js"
dotenv.config({
                        //Dotenv is made available in only one file that is index.js and we are using the import syntax so please check pckage.json -- dev script before using dotenv
    path: './env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`⚙️ Server is running at ${process.env.PORT}`)
    })
})
.catch(err => console.log("MongoDB connection error: " + err))












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
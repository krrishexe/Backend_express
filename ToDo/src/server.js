const express = require('express');
const dotenv = require('dotenv');
const app = require('./middlewares/app')
dotenv.config({
    path:'./env'
})
const connectDB = require('./db/db')
// const app = express()

const server = app.listen(process.env.PORT , ()=>{
    console.log(`⚙️ Server is running at ${process.env.PORT}`)
})

connectDB()
.then(()=>{
    server
})
.catch(err =>console.log(err))
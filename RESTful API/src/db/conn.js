const mongoose = require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/StudentsAPI")
.then(()=>{
    console.log("Connected to Mongo")
})
.catch((err)=>{
    console.log(err)
})
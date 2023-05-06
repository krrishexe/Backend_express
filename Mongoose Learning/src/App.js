const { error } = require('console');
const mongoose = require('mongoose');
const {Schema} = mongoose
const {Model} = mongoose

//CREATING SCHEMA
const practiceSchema = new Schema({
    name:String,
    description:String,
    date:String,
    time:String,
    location:String,
})


//ADDING DOCUMENTS




// CREATING COLLECTIONS
const Prac = new Model("prac",practiceSchema)


//CONNECTING TO DATABASE
mongoose.connect("mongodb://0.0.0.0:27017/practice")
.then(()=>console.log("connection established"))
.catch((error)=>console.log(error))
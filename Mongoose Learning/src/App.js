const { error } = require('console');
const mongoose = require('mongoose');
const {Schema} = mongoose
const {Model} = mongoose

//CREATING SCHEMA
const Books = new Schema({
    name:String,
    description:String,
    author:String,
    pulishedIn:Date,
})


// CREATING COLLECTIONS
const Book = new Model("Book",Books)



//ADDING DOCUMETS
const firstBook = new Book({
    name:"Three men in a Boat",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    author:"ankit Kumar",
    location:"rajasthan",
})


firstBook.save();



//CONNECTING TO DATABASE
mongoose.connect("mongodb://0.0.0.0:27017/Library")
.then(()=>console.log("connection established"))
.catch((error)=>console.log(error))
const { error } = require('console');
const mongoose = require('mongoose');
const {Schema} = mongoose



//CONNECTING TO DATABASE
mongoose.connect("mongodb://0.0.0.0:27017/Library")
.then(()=>console.log("connection established"))
.catch((error)=>console.log(error))


//CREATING SCHEMA
const booksSchema = new Schema({
    name:String,
    description:String,
    author:String,
    publishedIn:Date,
})


// CREATING COLLECTIONS
const Book = new mongoose.model("Book",booksSchema)



//ADDING DOCUMETS
const createDocument = async () => {
const firstBook = new Book({
    name:"Three men in a Boat",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    author:"ankit Kumar",
    publishedIn:Date.now(),
})

//SAVING THE FIRST DOCUMENT
const result = await firstBook.save();
console.log(result);
}
createDocument();



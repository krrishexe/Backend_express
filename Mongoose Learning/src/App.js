const { error } = require('console');
const mongoose = require('mongoose');
const { Schema } = mongoose



//CONNECTING TO DATABASE
mongoose.connect("mongodb://0.0.0.0:27017/Library")
    .then(() => console.log("connection established"))
    .catch((error) => console.log(error))


//CREATING SCHEMA
const booksSchema = new Schema({
    name: String,
    description: String,
    author: String,
    publishedIn: Date,
})


// CREATING COLLECTIONS
const Book = new mongoose.model("Book", booksSchema)



//ADDING DOCUMET            --->> IT WILL ADD ONLY ONE DOCUMENT AT A TIME
const createDocument = async () => {
    const firstBook = new Book({
        name: "Three men in a Boat",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        author: "ankit Kumar",
        publishedIn: Date.now(),
    })

    const secondBook = new Book({
        name: "Invisible man",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        author: "ankit Kumar",
        publishedIn: Date.now(),
    })

    const thirdBook = new Book({
        name: "Fifty shades",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        author: "ankit Kumar",
        publishedIn: Date.now(),
    })

    //SAVING THE FIRST BOOK
    // const result = await firstBook.save()
    // console.log(result)


    //SAVING All THE THREE DOCUMENT
    const result = await Book.insertMany([firstBook, secondBook, thirdBook]);
    console.log(result);
}

//CREATING DOCUMENT
// createDocument();



//READING DOCUMENT
const readingDocument = async () => {
    //TO VIEW ALL THE DOCUMENTS
    const result = await Book.find()
    console.log(result);


    //TO VIEW ANY PARTICULAR DOCUMENT
    // const result = await Book.findOne({ name:"Fifty shades"})
    // .select({ name:1})
    // console.log(result);
}
// readingDocument()
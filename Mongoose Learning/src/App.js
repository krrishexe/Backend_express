const { error } = require('console');
const mongoose = require('mongoose');
const { Schema } = mongoose



//CONNECTING TO DATABASE
// ---> if it doesn't connect to the database with localhost , try 0.0.0.0.
// ---> Here "Library" is the name of the database.
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


// CREATING MODELS / COLLECTIONS
// --> Model Name must be singular. For example "Book".
const Book = new mongoose.model("Book", booksSchema)



//ADDING DOCUMET           
const createDocument = async () => {
    const firstBook = new Book({
        name: "Three men in a Boat",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        author: "ankit Kumar",
        publishedIn: Date.now(),
    })
    // --->> IT WILL ADD ONLY ONE DOCUMENT AT A TIME
    //SAVING THE FIRST BOOK
    // const result = await firstBook.save()
    // console.log(result)
    
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
    


    //SAVING All THE THREE DOCUMENT
    const result = await Book.insertMany([firstBook, secondBook, thirdBook]);
    console.log(result);
}

//CREATING DOCUMENT
// createDocument();
//--->>METHODS
//.save()
//.insertOne()
//.insertMany()



//READING DOCUMENT
//-->> METHODS --> 
//.find()
//.findOne()

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




// db.collection.find()  -- to view/show all the data
// db.collection.find({ name:"Fifty"}) --> here name is the query.
// db.collection.find({ name:"Fifty"}).limit(1) --> limiting to show the first document only.
// db.collection.find({ name:"Fifty"}).limit(1).skip(1) --> showing only one documnet while skipping the first document.
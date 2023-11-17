const mongoose = require('mongoose')

const connectDB = async (req,res,next) => {
    try {
        const conn = await mongoose.connect("mongodb://0.0.0.0:27017/StudentsAPI")
        console.log("Connected to MongoDB successfully"+ conn.connection.host)
        
    } catch (error) {
        next(error)
    }
}

module.exports = connectDB

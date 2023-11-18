const mongoose = require('mongoose')

const ConnectDB = async (next) =>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connection Successfully established at " + conn.connection.host)
        
    } catch (error) {
        console.log("Error connecting to DB : " + error.message)
        process.exit(1)
    }
}
module.exports = ConnectDB
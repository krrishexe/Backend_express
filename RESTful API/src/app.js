const express = require('express');
const app = express();
const connectDB = require('./db/conn');
const Student = require('./Models/Students');
require('dotenv').config()
// const bodyParser = require('body-parser');
const studentRouter = require('./routes/student')



//MIDDLEWARE:
// app.use(bodyParser.json())
app.use(studentRouter)
app.use(express.bodyparser())

const server = app.listen(process.env.PORT,function(){
    console.log(process.env)
    console.log(`Server started successfully at http://localhost:${process.env.PORT}/`)
})


connectDB()
.then(()=>{
    server
})
.catch(err=>{console.log(err)})





//VIEW THE DATA OF A PARTICULAR STUDENT BY NAME
// app.get('/students/:name', async (req,res)=>{
//     try {
//         const _name = req.body.name
//         const result = await Student.find()
//         if(!result){
//             res.status(404).send({message: 'Student not found'})
//         }
//         else{
//             res.status(200).send(result)
//             console.log(result)
//         }
//     } catch (error) {
//         res.send(error.message)
//     }
// })
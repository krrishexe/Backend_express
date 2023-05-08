const express = require('express');
const app = express();
require('./db/conn')
const Student = require('./Models/Students');
const port = process.env.PORT || 5000;


//MIDDLEWARE:
const bodyParser = require('body-parser');
const studentRouter = require('./routes/student')
app.use(bodyParser.json())
app.use(studentRouter)




app.listen(port,function(){
    console.log(`Server started successfully at http://localhost:${port}/`)
})




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
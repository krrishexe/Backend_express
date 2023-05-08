const express = require('express');
require('./db/conn')
const Student = require('./Models/Students');
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.json())


//VIEW ALL THE STUDENTS
app.get('/' ,async (req, res) =>{
    const result = await Student.find()
    res.send(result)
})

//CREATE A NEW STUDENT
app.post('/students' ,function(req, res){
    const addStudent = new Student(req.body)
    console.log(req.body)
    res.send(req.body)
});

app.listen(port,function(){
    console.log(`Server started successfully at http://localhost:${port}/`)
})
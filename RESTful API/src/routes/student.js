const express = require('express')
const router = new express.Router();
const Student = require('../Models/Students');


router.get('/', (req, res) => {
    res.send('Welcome')
})


//GET ALL THE STUDENTS
router.get('/students' ,async (req, res) =>{
    try {
        const result = await Student.find()
        res.send(result)
        console.log(result)
    } catch (error) {
        res.send(error)
    }
})

//VIEW THE DATA OF A PARTICULAR STUDENT BY ID
router.get('/students/:id', async (req, res) =>{
    try {
        const _id = req.params.id
        const result = await Student.findById(_id)
        if(!result){
            res.status(404).send({message: 'Student not found'})
        }
        else{
            res.status(200).send(result)
            console.log(result)
        }
    } catch (error) {
        res.send(error.message)
    }
})



//CREATE A NEW STUDENT
router.post('/students' ,async (req, res) => {
    // const addStudent = new Student({
    //     name: req.body.name,
    //     age: req.body.age,
    //     email: req.body.email,
    //     password: req.body.password,
    //     gender: req.body.gender,
    //     address: req.body.address,
    //     reg_no: req.body.reg_no,
    //     class: req.body.class,
    //     phone: req.body.phone
    // })
    //instead of writing the whole request.boy , we can write a single re.body
    try {
        console.log(req.body)
        const addStudent = new Student(req.body)
        const result  = await addStudent.save()
        res.status(201).send(result)
    } catch (error) {
        res.status(400).send(error)
    }

});

//UPDATE A PARTICULAR STUDENT

router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const updatedStudent = await Student.findByIdAndUpdate(_id , req.body ,{
            new: true           // it will reflect the changes quickl by a single click
        })
        res.send(updatedStudent)
        console.log(updatedStudent)
    } catch (error) {
        res.send(error)
    }
})

//DELETE A PARTICULAR STUDENT

router.delete('students/:id', async (req, res) => {
    try {
        const _id = req.params.id
        console.log(req.params.id)
        const deletedStudent = await Student.findByIdAndDelete(_id)
        if(!_id) {
            return res.status(404).send({message: 'Student not found'})
        }
        console.log(deleteStudent)
        res.status(200).send(deletedStudent)

    } catch (error) {
        console.log(error)
        res.send(error)
    }
})


module.exports = router
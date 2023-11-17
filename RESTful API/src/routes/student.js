const express = require('express')
const router = new express.Router();
const Student = require('../Models/Students');


router.get('/', (req, res) => {
    res.send('Welcome')
})


//GET ALL THE STUDENTS
router.get('/students/all', async (req, res) => {
    try {
        const result = await Student.find()
        res.send(result)
        console.log(result)
    } catch (error) {
        res.send("Error grabbing students: " + error)
    }
})

//VIEW THE DATA OF A PARTICULAR STUDENT BY ID
router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const result = await Student.findById(_id)
        if (!result) {
            res.status(404).send({ message: 'Student not found' })
        }
        else {
            res.status(200).send(result)
            console.log(result)
        }
    } catch (error) {
        res.send(error.message)
    }
})

//VIEW THE DATA OF A PARTICULAR STUDENT BY NAME
router.get('/students', async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).send({ message: 'Name parameter is required' });

        }

        const result = await Student.find({
            name: { $regex: name, $options: 'i' }
        });

        if (result.length === 0) {
            res.status(404).send({ message: 'Student not found' });
        } else {
            console.log(result);
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
});




//CREATE A NEW STUDENT
router.post('/students', async (req, res) => {
    // const addStudent = new Student({
    //     name: req.body.name,
    //     age: req.body.age,
    //     email: req.body.email,
    //     password: req.body.password,
    //     gender: req.body.gender,
    // })
    //instead of writing the whole request.body , we can write a single req.body
    try {
        console.log(req.body)
        // const addStudent = new Student(req.body)
        const result = await Student.create(req.body)
        // const result = await addStudent.save()
        res.status(201).send(result)
        console.log(result)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }

});


//UPDATE A PARTICULAR STUDENT BY ID
router.put('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const updatedStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true         // it will reflect the changes quickl by a single click
        })
        res.status(200).send(updatedStudent)
        console.log(req.params)
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})

//UPDATE A PARTICULAR STUDENT BY NAME
router.put('/students', async (req, res, next) => {
    try {
        const name = req.query.name
        const updateStudent = await Student.findOneAndUpdate({
            name: { $regex: name, $options: 'i' }
        }, req.body)
        if (!updateStudent) {
            return res.status(404).send({ message: 'Student not found' })
        }
        res.status(200).send({ updateStudent, message: "Student updated successfully" })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
        next(error)
    }
})


//DELETE A PARTICULAR STUDENT

router.delete('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id
        console.log(req.params.id)
        const deletedStudent = await Student.findByIdAndDelete(_id)
        if (!_id) {
            return res.status(404).send({ message: 'Student not found' })
        }
        console.log(deletedStudent)
        res.status(200).send({ deletedStudent, message: 'Student Deleted Successfully' })

    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

// DELETE A PARTICULAR STUDENT BY NAME

router.delete('/students', async (req, res, next) => {
    try {
        const name = req.query.name
        const studentGoingToDeleted = await Student.findOneAndRemove({
            name: { $regex: name, $options: 'i' }
        })
        if (!studentGoingToDeleted) {
            return res.status(404).send({ message: 'Student not found' })
        }
        console.log(studentGoingToDeleted)
        res.status(200).send({ studentGoingToDeleted, message: 'Student successfully deleted' })


    } catch (error) {
        console.log(error.message)
        next(error)
    }
})


module.exports = router
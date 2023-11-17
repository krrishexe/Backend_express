//Schema and Models
const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,                  //no spaces between.
        minlength: 2,
    },
    age: {
        type: Number,
        required: true,
        min: 3,
        max: 18,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email-Id already exists"],
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
}, { timestamps: true })

const student = new mongoose.model("student", studentSchema);

module.exports = student;
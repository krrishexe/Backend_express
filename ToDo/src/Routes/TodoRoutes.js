const express = require('express')
const { addData } = require('../controllers/todoController')

const router = express.Router()

router.post('/home',addData)

module.exports = router
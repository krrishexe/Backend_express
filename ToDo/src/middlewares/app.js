const express = require('express');
const cors = require('cors');
const homeRoute = require('../Routes/TodoRoutes')
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true,limit:'10kb'}))
app.use(express.static('public'))
app.use('/api',homeRoute)
module.exports = app
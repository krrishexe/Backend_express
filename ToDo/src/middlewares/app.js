const express = require('express');
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true,limit:'10kb'}))
app.use(express.static('public'))



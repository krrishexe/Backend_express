// import express from 'express';
const express = require('express');

const app = express();     // basically a function

// app.listen(3000);    // here we are using the methods of the app express
                    // listen is a method which listens to the the HTTP requests.


app.listen(3000, function(){
    console.log("Server started Successfuly at port 3000");
})
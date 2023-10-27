// To initalise the Project we user the command , npm init which sets up package.json 

// import express from 'express';

const express = require('express');

const app = express();     // basically a function

// app.listen(3000);  // here we are using the methods of the app express
                    // listen is a method which listens to the the HTTP requests.

app.get("/", function (request , response){
    response.json({name:'krish'});
})                      
app.get("/contact", function (request , response){
    response.send("Contact me at krishyadav@gmail.com");
})                      
app.get("/about", function (request , response){
    response.send("Hii this is krishh");
})                      
                        // Makes a Get request to the specified route , to 'GET' data from the server
                        // .Listen is Also a method of app express which allows us to listen to the http requests on the mentioned server.

app.listen(3000, function(){
    console.log("Server started Successfuly at port http://localhost:3000");
})
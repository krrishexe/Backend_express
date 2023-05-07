const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/' ,function(req, res){
    console.log("hello world")
})

app.post('/books' ,function(req, res){
    console.log("books")
});

app.listen(port,function(){
    console.log(`Server started successfully at localhost:${port}`)
})
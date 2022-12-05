const express = require('express');
const bodyParser  = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))                // whenever we are using the post method to return anything to the 
                                                // browser homepage , we have to use the urlencoded function only


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})


app.post("/",function(req,res){

    console.log(req.body); 

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let op = req.body.operation;

    let result = Number(num1) + op+  Number(num2)
    res.send("hello world" + Number(result))
})






        // If we are working on a big  project and we dont know the exact location of the file , we can use
        // "__dirname" attribute , it gives us the directory of the current file.

app.listen(3000, function(){
    console.log("server started successfully at port 3000");
});
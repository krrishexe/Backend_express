const express = require('express');

const app = express();


app.get("/",function(req,res){
    console.log(res.sendFile(__dirname)); 
})

        // If we are working on a big  project and we dont know the exact location of the file , we can use
        // "__dirname" attribute , it gives us the directory of the current file.

app.listen(3000, function(){
    console.log("server started successfully at port 3000");
});
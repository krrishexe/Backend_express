// const express = require("express");
// const app = express();

// can be also written as:
const app = require("express")();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors:{
        origin:'*',
    }
    //options
})

io.on('connection', (socket) => {
    // console.log("Socket is active",socket)

    socket.on('chat',(payload)=>{
        console.log("payload: ", payload)
        io.emit("chat", payload)

    })

})

server.listen(5000,()=>{
    console.log("Server listening on port 5000 ...")
})
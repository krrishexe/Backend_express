const express = require('express');
const socketio = require('socket.io');

const app = express();
app.use(express.static(__dirname + '/public'))

const server = app.listen(5000,()=>{
    console.log('Server is running on port http://localhost:5000');
})

const io = socketio(server,{
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
    }
});

io.on('connection',(socket)=>{
    console.log('New connection with socket id :' , socket.id)
    socket.emit('message',{data:"Welcome to server"});
    socket.on('messageFromClient',(data)=>{
        console.log(data.data)
    })
})
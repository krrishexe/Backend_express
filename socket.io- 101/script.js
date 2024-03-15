const express = require('express');
const socketio = require('socket.io');
const app = express();

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    console.log("hello world!!")
})


const server = app.listen(5000,()=>{
    console.log("Server is running on port http://localhost:5000/")
})

const io = socketio(server);

io.on('connection', (socket) => {
    socket.emit('messageFromServer',{data:"Hi from server!!!"})
    socket.on('messageFromClient', (dataFromClient) => {
        console.log(dataFromClient)
    })
    socket.on('newMessageToServer',(newMsg)=>{
        io.emit('messageToAllClient',{text:newMsg.data})
    })
})


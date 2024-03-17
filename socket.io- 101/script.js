const express = require('express');
const socketio = require('socket.io');
const app = express();
//require('cors'); is the Server in docs
const cors = require('cors');

app.use(express.static(__dirname + '/public'))
// app.use(cors())
app.get('/', (req, res) => {
    console.log("hello world!!")
})


const server = app.listen(5000, () => {
    console.log("Server is running on port http://localhost:5000")
})

//io is the server in docs
const io = socketio(server, {
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    socket.emit('messageFromServer', { data: "Hi from server!!!" })
    socket.on('messageFromClient', (dataFromClient) => {
        console.log(dataFromClient)
    })
    socket.on('newMessageToServer', (newMsg) => {
        io.emit('messageToAllClient', { text: newMsg.data })        // emit means it will send to all the clients who are connected to the server
    })
})


//socket.io works on heartbeat mechanism, it will keep on checking if the client is connected or not by something called as pingInterval and pingTimeout.
// by default the pingInterval is set to 4 secs. which means it will take a beat every 4 secs to check if the client is connected or not.
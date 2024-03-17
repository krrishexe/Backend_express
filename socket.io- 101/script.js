const express = require('express');
const socketio = require('socket.io');
const app = express();
const cors = require('cors');

app.use(express.static(__dirname + '/public'))
// app.use(cors())
app.get('/', (req, res) => {
    console.log("hello world!!")
})


const server = app.listen(5000, () => {
    console.log("Server is running on port http://localhost:5000")
})

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
        io.emit('messageToAllClient', { text: newMsg.data })
    })
})


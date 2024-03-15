const http = require('http')
const express = require('express')
const app = express()
const websocket = require('ws')

const server = http.createServer((req, res) => {
    res.send('I am connected')
})
const wss = new websocket.WebSocketServer({ server })


// wss.on('headers', (headers, req) => {
//     console.log("headers", headers)
// })

wss.on('connection',(ws,req)=>{
    ws.send('I am the server')
})

wss.on('connection',(ws,req)=>{
    ws.on('message',(msg)=>{
        console.log(msg.toString())
    })
})


server.listen(8000, () => {
    console.log('server is listening on port : http://localhost:8000/')
})
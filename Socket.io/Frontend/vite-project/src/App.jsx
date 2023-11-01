import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { nanoid } from 'nanoid'
import './App.css'

// no dotenv


function App() {

  const socket = io('http://localhost:5000')
  const username = nanoid(4)


  const [chat, setChat] = useState([])
  const [message, setMessage] = useState('')


  const sendChat = (e) => {
    e.preventDefault()
    socket.emit('chat', { message,username })
    setMessage('')
  }

  useEffect(() => {
    socket.on('chat', (payload) => {
      setChat([...chat, payload])
    })
  })

  return (
    <>
      <h1>Chatty APP</h1>
      <form onSubmit={sendChat}>
        <input
          type="text"
          name="chat"
          className='text-lg rounded-lg w-full p-3 my-5'
          placeholder='Send text message'
          value={message}
          onChange={(e) => { setMessage(e.target.value) }}
        />

        <button
          className='bg-green-400 text-2xl text-black ' type='submit'
        >Send</button>

      </form>

      {
        chat.map((payload, index) => {
          return (
            <h3 className='my-2 text-3xl text-green-500' key={index}>{payload.message} <span>by {payload.username}</span> </h3>
          )
        })
      }
    </>
  )
}

export default App

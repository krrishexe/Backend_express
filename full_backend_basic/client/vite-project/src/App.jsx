import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    // axios.get('/api/jokes')
    // .then((response) =>{
    //   setJokes(response.data)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
    fetch("/api/jokes")
      .then((response) =>( 
        response.json()
      ))
      .then((data) => {
        setJokes(data)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(jokes)
  }, [])

  return (
    <div>
      <h1>hello world</h1>
      <p>Jokes : {jokes.length}</p>
      {
        Array.isArray(jokes) && jokes.map((joke, index) => (
          <div key={index}>
            <h1>{`Joke Title : ${joke.title}`}</h1>
            <p>{`Joke is : ${joke.description}`}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App

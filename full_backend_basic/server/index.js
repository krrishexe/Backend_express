import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000;
const jokes = [
    {
      "id": 1,
      "title": "The Math Magician",
      "description": "Why did the math book look sad? Because it had too many problems."
    },
    {
      "id": 2,
      "title": "Light Bulb Moment",
      "description": "Why did the light bulb go to school? To get brighter!"
    },
    {
      "id": 3,
      "title": "Coffee Time",
      "description": "How does coffee show affection? It espresso-es its love."
    },
    {
      "id": 4,
      "title": "Penguin Puns",
      "description": "What do you call a group of musical penguins? An ice band."
    },
    {
      "id": 5,
      "title": "Library Humor",
      "description": "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'"
    }
  ]
  
app.use(cors())

app.get('/api/jokes', (req, res) => {
    res.json(jokes)
})

app.listen(port, ()=>{
    console.log("Listening on port : http://localhost:" + port)
})
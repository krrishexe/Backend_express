const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

axios('https://www.imdb.com/chart/top/')
    .then(response =>{
        const html = response.data
        const a = cheerio.load(html)
    } )




app.listen(8000, function(){
    console.log("Server started succeessfully at port 3000");
})
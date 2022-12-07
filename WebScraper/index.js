const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

axios('https://www.imdb.com/chart/top/')                                //axios( url of the site that you wanna scrap)
    .then(response =>{
        const html = response.data
        const a = cheerio.load(html)                                  // loading the data recieved from the site 
        a(".titleColumn",html).each(function(){                     // for each item 
            a(this).text()                                         // getting the particular item by --> a(this)
        })                                                        // and now converting it to text.
    } )




app.listen(8000, function(){
    console.log("Server started succeessfully at port 3000");
})
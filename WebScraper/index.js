const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

let arr = [];

axios('https://www.superkicks.in/collections/men-sneakers?filter.v.availability=1')                                //axios( url of the site that you wanna scrap)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const heading = []
        const para = []
        const imgArticlesLinks = []
        // loading the data recieved from the site to cheerio
        // $(".headline-5", html).each(function () {                      // for each item 

        //     const title = $(this).text();
        //                                             // getting the particular item by --> a(this)
        //                                             // and now converting it to text.
        //     heading.push({
        //         title
        //     })
        // })

        // $(".headline-3", html).each(function () {                      // for each item 

        //     const p = $(this).text();
        //     console.log(p)
        //                                             // getting the particular item by --> a(this)
        //                                             // and now converting it to text.
        //     para.push({
        //         p
        //     })
        // })




            // ASK ASHU ABOUT THE TWO IMAGES IN A SINGLE DIV .


        $("li.grid__item", html).each(function () {                      // for each item 
            
            // const url = $(this).text();
            const url = $(this).find('a').attr('href')
            // console.log(url)
            
            
            // getting the particular item by --> $(this)
            // and now converting it to text.
            arr.push(
                // url:'https:'+url
                'https://www.superkicks.in'+url

            )
        
            
        })



    }).catch(err => console.log(err))

    
    
    


app.listen(8000, function () {
    console.log("Server started succeessfully at port 8000");
})





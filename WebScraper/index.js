const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

axios('https://www.superkicks.in/collections/men-sneakers?filter.v.availability=1&page=1')                                //axios( url of the site that you wanna scrap)
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



        $(".card__media", html).each(function () {                      // for each item 

            // const url = $(this).text();
            const url = $(this).find('img').attr('src')
            
            const url2 = $(this).find('img').attr('srcset')
            // getting the particular item by --> $(this)
            // and now converting it to text.
            imgArticlesLinks.push({
                url:'https:'+url,
                url2:'https:'+url2
            })
        })
        console.log(imgArticlesLinks);
        // console.log(heading);
    }).catch(err => console.log(err))




app.listen(8000, function () {
    console.log("Server started succeessfully at port 8000");
})





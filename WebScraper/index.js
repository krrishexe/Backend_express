const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

axios('https://www.nike.com/in/launch')                                //axios( url of the site that you wanna scrap)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const heading = []
        const para = []
        const imgArticlesLinks = []
        // loading the data recieved from the site to cheerio
        $(".headline-5", html).each(function () {                      // for each item 

            const title = $(this).text();
                                                    // getting the particular item by --> a(this)
                                                    // and now converting it to text.
            heading.push({
                title
            })
        })

        $(".headline-3", html).each(function () {                      // for each item 

            const p = $(this).text();
                                                    // getting the particular item by --> a(this)
                                                    // and now converting it to text.
            para.push({
                p
            })
        })

        // $(".headline-3",html).each(function(){
        //     const p = $(this).text();

        //     para.push({
        //         p
        //     })
        // })


        $(".image-component mod-image-component u-full-width", html).each(function () {                      // for each item 

            const url = $(this).text();
            // getting the particular item by --> $(this)
            // and now converting it to text.
            imgArticlesLinks.push({
                url
            })
        })
        console.log(heading,para,imgArticlesLinks);
        // console.log(heading);
    }).catch(err => console.log(err))




app.listen(8000, function () {
    console.log("Server started succeessfully at port 8000");
})





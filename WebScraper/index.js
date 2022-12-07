const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

axios('https://www.flipkart.com/search?q=sony+headphones&sid=0pm%2Cfcn%2Cgc3%2Cka8&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_9_na_na_ps&as-pos=1&as-type=HISTORY&suggestionId=sony+headphones%7CWireless+Headphones&requestId=5eeee3be-d666-4da4-b96c-b0a607429fcd')                                //axios( url of the site that you wanna scrap)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        // loading the data recieved from the site to cheerio
        $("._4ddWXP", html).each(function () {                      // for each item 
            // const title = $(this).text()
            const title = $(this).text()
            const links = $(this).find('a').attr('href')
            // getting the particular item by --> a(this)
            // and now converting it to text.
            articles.push({
                title,
                links
            })
        })
        console.log(articles);
    }).catch(err => console.log(err))




app.listen(8000, function () {
    console.log("Server started succeessfully at port 3000");
})
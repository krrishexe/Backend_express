import puppeteer from 'puppeteer';
import fs from 'fs'

(async () => {
    const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://flipkart.com');
    await page.type('.Pke_EE', 'iphone');
    await page.keyboard.press('Enter');
    await page.waitForSelector('._1AtVbE');
    const spans = await page.$$eval('._1AtVbE ._2kHMtA ._1fQZEK ._3pLy-c ._4rR01T', allSpans => allSpans.map(span => span.textContent))
    
    console.log(spans)
    await browser.close();
    await fs.writeFile('data.json' , JSON.stringify(spans),(err)=>{
        if(err) throw err;
        console.log('Data has been written to the file')
    })
})();
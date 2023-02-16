const {readFileSync,writeFileSync, } = require('fs')

const first = readFileSync('./content/first.txt','utf-8');        // syntax
const second = readFileSync('./content/second.txt','utf-8');      // syntax

writeFileSync('./content/result-sync.txt',`this is a new file ${first}, ${second}`)
//syntax
// if the file is not there , node will create one and then add changes to it.
// and if the file is already there , writeFileSync will override the text written there.

console.log(first,second); 
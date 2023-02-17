const {readFileSync,writeFileSync, } = require('fs')

// console.log("Starting the fs task")

const first = readFileSync('./content/first.txt','utf-8');        // syntax
const second = readFileSync('./content/second.txt','utf-8');      // syntax

// console.log("creating the writeFileSync")

writeFileSync('./content/result-sync.txt',`this is a new file ${first}, ${second}`)
//syntax
// if the file is not there , node will create one and then add changes to it.
// and if the file is already there , writeFileSync will override the text written there.

console.log(first,second); 

// console.log("Done with the task");
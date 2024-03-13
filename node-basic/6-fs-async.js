const {readFile,writeFile } = require('fs');

// console.log("creating the task i.e. reading the files")

readFile('./content/first.txt' , 'utf-8' , (err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `this is a new file : ${first} , ${second}`,
        (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)                       // result will be undefined cz writeFile wont know the thing that we wrote on that new file.
        });
    })  
})

// console.log("Starting the next task");

// Asynchronous  --> Non Blocking
// Synchronous  --> Blocking

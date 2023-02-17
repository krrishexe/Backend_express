const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req)
    // console.log(res)

    if(req.url === '/'){
       return  res.end(`<h1>Welcome to the <strong> HOME </strong> page</h1>`);
    }
    if(req.url === '/about'){
        return res.end(`<h1>Welcome to the <strong>ABOUT</strong> page</h1>`);
    }
    // res.write("Hello worldd");
    else{
        return res.end(`<h1>OOPS!!!! This webpage is invalid </h1>
        <a href = '/'> Go Back to the Home page </a>`)
    }
})

// console.log("server running at port 5000")
server.listen(5000)
const http = require("http");
http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.end(" Welcome to Home Page");
    }
    if(res.url ==="/about"){
        res.end("We are in About Page");
    }
    res.end("its and error Page ");

}).listen(8080);

const http = require("http");
const conf = require("./config/config");
const path = require("path");
const filePath = require('./helper/filePath');

const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req,res)=>{
    const url = path.join(conf.root,req.url);
    filePath(req,res,url);
});

server.listen(port,hostname,()=>{
    console.log(`server is running on the ${port}`);
});

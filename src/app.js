const http = require("http");
const conf = require("./config/config");
const path = require("path");
const filePath = require('./helper/filePath');
const openUrl = require('./helper/openUrl');
 
class Server{
    constructor(config){
        this.conf = Object.assign({},conf,config);
    }
    start(){
        const server = http.createServer((req,res)=>{
            const url = path.join(this.conf.root,req.url);
            filePath(req,res,url,this.conf);
        });
        
        server.listen(this.conf.port,this.conf.hostname,()=>{
            let openurl = `http://${this.conf.hostname}:${this.conf.port}`;
            console.log(`server is running on the ${openurl}`);
            openUrl(openurl);
        });
    }
}

module.exports = Server;


const fs = require('fs');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const Handlebars = require("handlebars");
const path = require("path");
const conf = require("../config/config");
const mime = require("../helper/mime");
const compress = require('./compress');
const range = require('./range');

//获取文件夹路径
const tplPath = path.join(__dirname,"../template/dir.tpl");
//读取文件
const source = fs.readFileSync(tplPath,'utf-8');
//解析成模板
const template = Handlebars.compile(source);

module.exports = async function(req,res,filePath){
    try{
        const stats = await stat(filePath);
        if(stats.isFile()){
            res.statusCode = 200;
            let extname = mime(filePath);
            // res.setHeader('Content-Type','text/plian');
            res.setHeader('Content-Type',extname.type);
            let rs;
            let {code,start,end} = range(stats.size,req,res);
            if(code == 200){
                res.statusCode = 200;
                rs = fs.createReadStream(filePath);
            }else if(code == 206){
                res.statusCode = 206;
                //以从文件中读取一定范围的字节而不是读取整个文件
                rs = fs.createReadStream(filePath,{start,end});
            }
            if(filePath.match(conf.compress)){
                rs = compress(rs,req,res);
            }
            rs.pipe(res);
        }else if(stats.isDirectory()){
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html');
            const result = await readdir(filePath);
            const dir = path.relative(conf.root,filePath);
            const data = {
                title:path.basename(filePath), //文件名
                files:result.map((file)=>{
                    return {
                        file,
                        icon:mime(file).icon
                    };
                }) , //文件路径
                dir:dir?`/${dir}`:''
            };
            res.end(template(data));
        }
    }catch(ex){
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plian');
        res.end("not find the file");
    }
};

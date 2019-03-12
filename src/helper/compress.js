const {createGzip,createDeflate} = require('zlib');

module.exports = (rs,req,res)=>{
    //读取浏览器支持的压缩方法
    const acceptEncoding = req.headers['accept-encoding'];
    //服务器支持的压缩方式
    if(!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)){
        return;
    }else if(acceptEncoding.match(/\bgzip\b/)){
        res.setHeader('Content-Encoding','gzip');
        //对写入的流进行压缩
        return rs.pipe(createGzip());
    }else if(acceptEncoding.match(/\bdeflate\b/)){
        res.setHeader('Content-Encoding','gzip');
        //对写入的流进行压缩
        return rs.pipe(createDeflate());
    }


};
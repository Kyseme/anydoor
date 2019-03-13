const {cache} = require('../config/config');


function refreshRes(stats,res){

    if(cache.cacheControl){
        res.setHeader('Cache-Control',`max-age=${cache.maxAge}`);
    }
    if(cache.expires){
        res.setHeader('Expires',new Date(Date.now() + cache.maxAge*1000).toUTCString());
    }
    if(cache.etag){
        res.setHeader('ETag',`${stats.dev}${stats.size}`);
    }

    if(cache.lastModified){
        res.setHeader('Last-Modified',stats.mtime.toUTCString());
    }
    
}

module.exports = function isFresh(stats,req,res){
    refreshRes(stats,res);
    //读取request中的lastmodified 和 etag属性值
    const modified = req.headers['if-modified-since'];
    const etag = req.headers['if-none-match'];
    if(!modified && !etag){
        return false; 
    }
    //node 中获取头部字段的方法
    if(modified && modified !== res.getHeader('last-modified')){
        return false;
    }
    if(etag && etag !== res.getHeader('etag')){
        return false;
    }
    return true;
};

const path = require('path');
const mimeTypes = {
    // 'css' : {'type':'text/css','icon':'&#xe605;'},
    'css' : 'text/css',
    'gif' : 'image/gif',
    'html': 'text/html',
    'ico' : 'image/x-icon',
    'jpeg': 'image/jpeg',
    'jpg' : 'image/jpeg',
    'js' : 'text/javascript',
    'json':'application/json',
    'pdf':'application/pdf',
    'png':'image/png',
    'svg':'image/svg+xml',
    'swf':'application/x-shockwave-flash',
    'tiff':'image/tiff',
    'txt':'text/plain',
    'wav':'audio/x-wav',
    'wma':'audio/x-ms-wma',
    'wmv':'video/x-ms-wmv',
    'xml':'text-xml'
};
const mimes = {
    'css' : {'type':'text/css','icon':'&#xe605;'},
    'gif' : {'type':'image/gif','icon':'&#xe608;'},
    'html' : {'type':'text/html','icon':'&#xe608;'},
    'ico' : {'type':'image/x-icon','icon':'&#xe608;'},
    'jpeg' : {'type':'image/jpeg','icon':'&#xe64d;'},
    'jpg' : {'type':'image/jpeg','icon':'&#xe64d;'},
    'js' : {'type':'text/javascript','icon':'&#xe65d;'},
    'json' : {'type':'application/json','icon':'&#xe608;'},
    'pdf' : {'type':'application/pdf','icon':'&#xe608;'},
    'png' : {'type':'image/png','icon':'&#xe608;'},
    'svg' : {'type':'image/svg+xml','icon':'&#xe608;'},
    'swf' : {'type':'application/x-shockwave-flash','icon':'&#xe608;'},
    'tiff' : {'type':'image/tiff','icon':'&#xe608;'},
    'txt' : {'type':'text/plain','icon':'&#xe608;'},
    'wav' : {'type':'audio/x-wav','icon':'&#xe608;'},
    'wma' : {'type':'audio/x-ms-wma','icon':'&#xe608;'},
    'wmv' : {'type':'video/x-ms-wmv','icon':'&#xe608;'},
    'xml' : {'type':'text-xml','icon':'&#xe608;'},
};

module.exports = (filePath)=>{
    let ext = path.extname(filePath).split('.').pop().toLowerCase();
    ext = ext ? ext :'';
    // extname = extname?extname.substring(1):'';  //有可能返回.
    return mimes[ext] || mimes['txt'];
};


**range**

- range:bytes = [start] - [end]
- Accept-Ranges:bytes
- Content-Range: unit <range-start>-<range-end>/<size>


**缓存**

- 强制缓存，Expires,Cache-control 
- 协商缓存，If-Modified-Since/Last-Modified | If-None-Match/ETag





liux 
`chmod +x bin/anydoor` 给bin文件夹下面的anydoor文件加执行权限

`ls -l anydoor` 查看权限信息

glob

- *匹配任意个字符
- **任意层级匹配
- ？匹配一个字符
- [...]  匹配范围内的任意字符
- !(pattern1|patter2)匹配取反
- ?(pattern1|patter2)匹配0或1个
- +(pattern1|patter2)匹配1或多个
- *(a|b|c)匹配任意个
- @(pattern|pat*|pat?erN)匹配特定的一个


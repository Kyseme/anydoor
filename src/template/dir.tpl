<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="src/template/iconfont.css">
    <title>{{title}}</title>
    <style>
        body{margin:30px;}
        a{display:block;}
    </style>
</head>
<body>
    {{#each files}}
        <a href="{{../dir}}/{{file}}"> <span class="icon iconfont">{{icon}}</span>{{file}}</a>
    {{/each}}
</body>
</html>

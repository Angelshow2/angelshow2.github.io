
var express = require('express')
var path = require('path')

var app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))  //-----拼接路径
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules')))

app.engine('html', require('express-art-template')) //-----配置express-art-template模板引擎

app.set('views', path.join(__dirname, './views')) //默认去 views 文件夹中去找，可以在这里修改

app.get('/', function (req, res) {  
    res.render('index.html', {
        name: '张三'
    })  //-----默认去 views 文件中去找
})

app.listen(3000, function (req, res) {
    console.log('Running...')
})
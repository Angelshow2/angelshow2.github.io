const mongoose = require('mongoose');

//连接 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

//创建一个模型
//就是在设计数据库
const Cat = mongoose.model('Cat', { name: String });

//实例化一个Cat
const kitty = new Cat({ name: 'Zildjian' });

//持久化保存 kiity 实例
kitty.save().then(() => console.log('meow')); 
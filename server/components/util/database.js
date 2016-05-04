/**
 * Created by JonDai on 2016/4/12.
 */
var mongoose = require('mongoose');
var ENV = require('../../config/environment/development');
//默认端口为27017
//如果没有该user的数据库，会自动新建
var connectionString = ENV.mongo.uri;

//mongoose.createConnection 与 mongoose.connect 的区别详见：
//https://cnodejs.org/topic/5226a922552118f11a04028e
mongoose.connect(connectionString);
db = mongoose.connection;

//为连接绑定事件监听
db.on('connected' , function () {
    console.log('Mongoose connected to: localhost');
});

db.on('error' , function (err) {
    console.log('Mongoose error! ' + err);
});

db.on('disconnected' , function () {
    console.log('Mongoose disconnected from: localhost');
});

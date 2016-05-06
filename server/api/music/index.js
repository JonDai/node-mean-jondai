/**
 * Created by JonDai on 2016/5/6.
 * index.js 一个路由文件
 */

var express = require('express');
var controller = require('./music.controller');

var router = express.Router();

router.get('/', controller.index);

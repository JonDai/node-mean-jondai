/**
 * Created by JonDai on 2016/5/6.
 */
var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/',controller.index);

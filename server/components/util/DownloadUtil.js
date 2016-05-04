/**
 * Created by JonDai on 2016/4/28.
 */
var request = require('request');
var fs = require('fs');
var env  = require('../../config/local.env');

exports.loadPicture = function (url,key,callback) {
  request(url,callback).pipe(fs.createWriteStream(env.ATTACHMENT+key+".jpg"));
}

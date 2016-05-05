/**
 * Created by JonDai on 2016/5/5.
 */
var qiniu = require('./qiniu');
var Download = require('./DownloadUtil');
var superagent = require('superagent');
var env = require('../../config/local.env');


exports.resetURL = function (url,key) {
  var filePath = env.ATTACHMENT + key + ".jpg";
  var bucket = env.qiniu_conf_BUCKET;
  Download.loadPicture(url,key,function () {
    var token = qiniu.uptoken(bucket, key);
    //上传图片
    qiniu.uploadFile(token, key, filePath);
  });
}


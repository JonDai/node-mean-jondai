/**
 * Created by JonDai on 2016/4/28.
 */
var qiniu = require("qiniu");
var env = require('../../config/local.env');

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = env.qiniu_conf_ACCESS_KEY;
qiniu.conf.SECRET_KEY = env.qiniu_conf_SECRET_KEY;

//构建上传策略函数
exports.uptoken = function(bucket, key) {
  var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
  return putPolicy.token();
}

//构造上传函数
exports.uploadFile = function(uptoken, key, localFile) {
  var extra = new qiniu.io.PutExtra();
  qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
    if(!err) {
      // 上传成功， 处理返回值
      console.log(ret.hash, ret.key, ret.persistentId);
    } else {
      // 上传失败， 处理返回代码
      console.log(err);
    }
  });
}


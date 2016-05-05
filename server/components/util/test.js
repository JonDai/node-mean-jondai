/**
 * Created by JonDai on 2016/4/28.
 */
// var qiniu = require('./qiniu'),
//   download = require('./DownloadUtil'),
//   env  = require('../../config/local.env'),
  // key = 'zhihu1234',
  // filePath = env.ATTACHMENT+key+".jpg";
  // bucket = 'movie',
    // News = require('../../api/wiki/wiki.news.model'),
  var  PicUtic = require('./PictureUtil');

// //下载图片
// download.loadPicture('http://pic3.zhimg.com/bcda551c6b531ef21c99c8855190ffea.jpg',key,function(){
//   console.log('ok');
//   var token = qiniu.uptoken(bucket,key);
// //上传图片
//   qiniu.uploadFile(token, key, filePath);
// });
//生成token
//
// var token = qiniu.uptoken(bucket,key);
// //上传图片
// qiniu.uploadFile(token, key, filePath);
// function find() {
//   News.find(function (err,news) {
//     if(err) console.log(err);
//     console.log('init');
//   })
// }

console.log(PicUtic.resetURL("https://pic4.zhimg.com/852f55cb0f59a50d7811f1d79b592817_b.jpg","852f55cb0f59a50d7811f1d79b592817_b"));

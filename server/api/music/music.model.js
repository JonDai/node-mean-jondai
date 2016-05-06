/**
 * Created by JonDai on 2016/5/6.
 */
var mongoose = require('mongoose');

var MusicSchema = new mongoose.Schema({
  m_id:Number,
  //歌名
  name:String,
  //歌手
  Singer:String,
  //分类
  tag:String,
  //热度
  point:Number,
  //是否标记
  isMark:Boolean,
  //播放次数
  playCount:Number,
  //连接
  link:String
});

module.exports = mongoose.Model('Music',MusicSchema);

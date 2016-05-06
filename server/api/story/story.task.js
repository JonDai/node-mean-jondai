/**
 * Created by JonDai on 2016/4/28.
 * 任务调度器
 */
var schedule = require('node-schedule');
var superagent = require('superagent');
var cheerio =require('cheerio');
var Story = require('./story.model');
var StoryDetail = require('./story.detail.model');
var constant = require('../../config/local.env');
var qiniu = require("../../components/util/qiniu");
var downloadUtil = require('../../components/util/DownloadUtil');
var PictureUtil = require("../../components/util/PictureUtil");
var env = require('../../config/local.env');

// var db = require('../../components/util/database');

var rule = new schedule.RecurrenceRule();
// rule.second = [10,20,30,40,50,0];
rule.hour = [6,8,12,15,17,20,24];

var j = schedule.scheduleJob(rule, function(){
  console.log('正在去获取最新的知乎api...!');
  superagent.get(env.ZHIHU_NEW_LAST_URL)
    .end(function (err , sres) {
        if(err) {
          console.error(err);
          return;
        }else{
          savestory(sres.text);
        }

    })
});

var savestory = function (jsonData) {
    var jsonObj = JSON.parse(jsonData),
        date = jsonObj.date,
        stories = jsonObj.stories,
        topStories = jsonObj.top_stories;

    for(var s in stories){
      var storie = stories[s];
      var story = new Story({
        title:      storie.title,
        ga_prefix:  storie.ga_prefix,
        images:     storie.images[0],
        type:       0,
        wiki_id:    storie.id,
        date:       date,
        url:        constant.ZHIHU_story_URL + storie.id,
        create_date:new Date()
      });
      checksaveNew(story);
    };

    for(var s in topStories){
      var storie = topStories[s];
      var images = storie.images ? storie.images[0] : storie.image;
      var story = new Story({
        title:      storie.title,
        ga_prefix:  storie.ga_prefix,
        images:     images,
        type:       1,
        wiki_id:    storie.id,
        date:       date,
        url:        constant.ZHIHU_story_URL + storie.id,
        create_date:new Date()
      });
      checksaveNew(story);
    }
};


var checksaveNew = function(story){
  Story.find({wiki_id:story.wiki_id},function (err,result) {
    var falg = result.length > 0 ? false : true;
    if(falg){
      updatePicAndSave(story);
    }else{
      return;
    }
  }
  );
};

var updatePicAndSave = function (story) {
  var key = 'zh'+ story.wiki_id;
  var filePath = env.ATTACHMENT+key+".jpg";
  var bucket = env.qiniu_conf_BUCKET;

  //下载图片
  downloadUtil.loadPicture(story.images,key,function(){
    var token = qiniu.uptoken(bucket,key);
  //上传图片
    qiniu.uploadFile(token, key, filePath);

    //保存
    story.images = env.qiniu_conf_URL + key;
    console.log('new images:'+story.images);
    story.save(function (err,result) {
      if(err) console.error('story保存失败'+err);
      else{
        loadStoryDetail(result);
      }
    });
  });
}

var loadStoryDetail = function (story) {
  superagent.get(env.ZHIHU_NEWS_URL+story.wiki_id)
    .end(function (err, sres) {
      if (err) {
        console.error(err);
      } else {

        var detail = JSON.parse(sres.text);
        var storyDetail = new StoryDetail({
          body: detail.body,
          title: detail.title,
          image: detail.image,
          type: detail.type,
          wiki_id: detail.id
        });

        //替换图片地址
        var key = 'zh' + storyDetail.wiki_id;
        PictureUtil.resetURL(storyDetail.image,key);
        storyDetail.image = env.qiniu_conf_URL+key;
        //替换文章中图片地址
        var $ = cheerio.load(storyDetail.body);

        $('img').each(function(i, elem) {
          var oldURL = $(this).attr('src');
          console.log("OLD URL"+oldURL);
          var key = "zh-"+Math.random();
          PictureUtil.resetURL(oldURL,key);
          storyDetail.body = storyDetail.body.toString().replace(oldURL,env.qiniu_conf_URL+key);
        });
        storyDetail.save();
      }
    });
}



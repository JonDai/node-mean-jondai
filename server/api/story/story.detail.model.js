/**
 * Created by JonDai on 2016/5/5.
 */
var mongoose = require('mongoose');

var StoryDetailSchema = new mongoose.Schema({
  body: String,
  title: String,
  image: String,
  type: Number,
  wiki_id: Number
});

module.exports = mongoose.model('StoryDetail',StoryDetailSchema);

/**
 * Created by JonDai on 2016/5/4.
 */
'use strict'
// import mongoose from 'mongoose';
var mongoose = require('mongoose');

var StorySchema = new mongoose.Schema({
  title:      String,
  ga_prefix:  String,
  images:     String,
  type:       Number,
  wiki_id:    Number,
  date:       String,
  url:        String,
  create_date:Date
});

// export default mongoose.model('Story', StorySchema);
module.exports = mongoose.model('Story', StorySchema);

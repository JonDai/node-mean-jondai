/**
 * Created by JonDai on 2016/5/6.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  role:String
});

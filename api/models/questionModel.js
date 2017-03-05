'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  vote: {
    type: Number
  },
  author: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  update_at: {
    type: Date
  },
  id:{
    type: String
  }
});


module.exports = mongoose.model('Question', QuestionSchema);

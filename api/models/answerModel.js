'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  text: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  questionId: {
    type: String
  },
  id:{
    type: String
  }
});


module.exports = mongoose.model('Answer', AnswerSchema);

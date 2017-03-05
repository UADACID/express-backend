'use strict';

var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');

exports.get_all = function(req, res) {
  // const search = req.query.search;
  // console.log(req.params.questionId);
  const {questionId} = req.params;
  // console.log(_id);
  // return;
  Answer.find({questionId:questionId}, function(err, result) {
    if (err){
      res.send(err);
    }else{
      for (var i = 0; i < result.length; i++) {
        result[i].id = result[i]._id;
      }
      res.send(result);
    }
  });
};

exports.create_answer = function(req, res) {
  var new_answer = new Answer(req.body);
  const {questionId} = req.params;
  new_answer.questionId = questionId;
  new_answer.save(function(err, result) {
    if (err){
      res.send(err);
    }else{
      result.id = result._id;
      res.json(result);
    }
  });
};

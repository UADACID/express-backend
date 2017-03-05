'use strict';

var mongoose = require('mongoose');
var Question = mongoose.model('Question');


exports.list_all_question = function(req, res) {
  const search = req.query.search;
  Question.find({$or:[{ 'title': new RegExp(search, 'i') },{ 'description': new RegExp(search, 'i') }]}, function(err, result) {
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


exports.create_a_question = function(req, res) {
  var new_question = new Question(req.body);
  new_question.update_at = null;
  new_question.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};


exports.update_vote = function(req, res) {
  const value = req.body;
  value.update_at = new Date;
  const _id = req.params.id;
  Question.update({_id:_id},{$set:value}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });

};

exports.get_one = function(req, res) {
  Question.findById(req.params.id, function(err, task) {
    if (err){
      res.send(err);
    }else {
      task.id = task._id;
      res.json(task);
    }
  });
};

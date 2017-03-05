'use strict';

var mongoose = require('mongoose');
var Question = mongoose.model('Question');
// var Answer = mongoose.model('Answer');


exports.list_all_question = function(req, res) {
  const search = req.query.search;
  // console.log(search);
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
  // console.log(new_question);
  // return;
  new_question.save(function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};


exports.update_vote = function(req, res) {
  // var new_question = new Question(req.body);
  const value = req.body;
  value.update_at = new Date;
  const _id = req.params.id;
  // console.log(value);
  // console.log(req.params.id);
  Question.update({_id:_id},{$set:value}, function(err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });

};

exports.get_one = function(req, res) {
  // console.log(req.params.id);
  Question.findById(req.params.id, function(err, task) {
    if (err){
      res.send(err);
    }else {
      task.id = task._id;
      res.json(task);
    }
  });
};


//
// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
//
// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };
// // Task.remove({}).exec(function(){});
// exports.delete_a_task = function(req, res) {
//
//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };

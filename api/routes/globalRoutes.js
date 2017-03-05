'use strict';

module.exports = function(app) {
	var question = require('../controllers/questionController');
  var answer = require('../controllers/answerController');
	
	app.route('/api/v1/question')
		.get(question.list_all_question)
		.post(question.create_a_question);

  app.route('/api/v1/question/:id')
    .get(question.get_one)
    .put(question.update_vote);

  app.route('/api/v1/question/:questionId/answers')
    .get(answer.get_all)
    .post(answer.create_answer);
};

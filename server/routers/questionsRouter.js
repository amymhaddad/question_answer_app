const express = require('express');
const questionsRouter = express.Router();

const Questions = require('../data/questionsModule');
const {
	validateId,
	validateQuestionModification,
	validateNewQuestion,
	handleErrors
} = require('../data/middlewares/Middleware');

questionsRouter.get('/', handleErrors, (req, res) => {
	const { answer, distractors, limit, id } = req.query;

	Questions.getQuestions({ answer, distractors, limit, id })
		.then((questions) => res.status(200).json(questions))
		.catch((error) => handleErrors(error));
});

questionsRouter.get('/:id', [validateId, handleErrors], (req, res) => {
	Questions.getQuestion(req.params.id)
		.then((question) => {
			if (!question)
				return res.status(404).json({ error: 'Question id is not found' });
			return res.status(200).json(question);
		})
		.catch((error) => handleErrors(error));
});

questionsRouter.put('/', [validateQuestionModification, handleErrors], (req, res) => {

	const { id, question } = req.body

	Questions.updateQuestion(id, question)
		.then((count) => {
			if (!count)
				return res.status(404).json({ error: 'Question id is not found' });
			return res.status(201).json(question);
		})
		.catch((error) => handleErrors(error));
});

questionsRouter.post('/', [validateNewQuestion, handleErrors], (req, res) => {
	Questions.addQuestion(req.body)
		.then((newQuestion) => res.status(201).json(req.body))
		.catch((error) => handleErrors(error));
});

module.exports = questionsRouter;

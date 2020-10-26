module.exports = {
	validateId,
	validateQuestionModification,
	validateNewQuestion,
	handleErrors
};

function validateId(req, res, next) {
	if (!Number(req.params.id)) return res.status(400).json({ error: 'Invalid question id' });
	next();
}

function validateQuestionModification(req, res, next) {
	if (!Number(req.body.id) || !req.body.question)
		return res.status(400).json({ error: 'You must enter a valid id and question' });
	next();
}

function validateNewQuestion(req, res, next) {
	const contents = req.body;
	if (!contents.question || !contents.answer || !contents.distractors) {
		return res.status(400).json({ error: 'All fields are required' });
	}
	next();
}

function handleErrors(error, req, res, next) {
	return res.status(500).json({ error: 'server error' });
}

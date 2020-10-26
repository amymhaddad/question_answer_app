const db = require('./dbConfig');

module.exports = {
	getQuestions,
	getQuestion,
	updateQuestion,
	addQuestion
};

function getQuestions(query) {
	//Filter by distractors
	if (query.distractors) {
		return db('questions').where('distractors', 'like', `%${query.distractors}%`);
	}

	//Limit
	if (query.limit) {
		return db('questions').limit(parseInt(query.limit));
	}

	//Sort by id
	if (query.id) {
		return db('questions').orderBy('id', query.id);
	}
	//Sort by answer
	if (query.answer) {
		return db('questions').orderBy('answer', query.answer);
	}

	return db('questions');
}

function getQuestion(id) {
	return db('questions').where({ id }).first();
}

function updateQuestion(id, question) {
	return db('questions').where({ id }).update({ question });
}

function addQuestion(question) {
	return db('questions').insert(question);
}

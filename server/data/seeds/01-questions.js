const data = require('../parseCsvData');

exports.seed = function(knex, Promise) {
	const table = 'questions';
	return knex(table).del().then(function() {
		let result = [];

		let total = 0;

		while (total < data.length) {
			for (let i = 0; i < 100; i++) {
				let eachRow = {
					question: data[i]['question'],
					answer: parseInt(data[i]['answer']),
					distractors: data[i]['distractors']
				};
				result.push(eachRow);
			}

			total += 100;
			return knex.insert(result).into(table);
		}
	});
};

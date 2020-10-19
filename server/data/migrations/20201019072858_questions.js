exports.up = function(knex, Promise) {
	return knex.schema.createTable('questions', function(table) {
		table.increments('id');
		table.string('question');
		table.integer('answer');
		table.string('distractors');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('questions');
};

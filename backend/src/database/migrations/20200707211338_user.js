
exports.up = function(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};

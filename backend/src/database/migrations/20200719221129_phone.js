
exports.up = function(knex) {
  return knex.schema.createTable('telefone', (table) =>{

    table.increments('id_numero');
    table.integer('numero',12).unique().notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('telefone');
};

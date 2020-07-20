
exports.up = function(knex) {
  return knex.schema.createTable('cargos', (table) =>{

    table.increments('id_cargo');
    table.string('nome_cargo',48).notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cargos');
};

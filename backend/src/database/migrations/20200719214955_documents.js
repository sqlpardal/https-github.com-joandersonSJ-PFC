
exports.up = function(knex) {
  return knex.schema.createTable('documentos', (table) =>{

    table.increments('id_documentos');
    table.integer('rg',12).unique().notNullable();
    table.integer('cpf',12).unique().notNullable();
    table.integer('pis',13).unique().notNullable();

    
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('documentos');
};

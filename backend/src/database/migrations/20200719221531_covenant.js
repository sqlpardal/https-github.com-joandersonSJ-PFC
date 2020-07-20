
exports.up = function(knex) {
  return knex.schema.createTable('convenio', (table) =>{

    table.increments('numero_convenio');
    table.integer('tipo_convenio',100).notNullable();
    table.integer('custo_convenio',20).notNullable();
    
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('convenio');
};


exports.up = async function(knex) {
  return await knex.schema.createTable('endereco', (table) =>{

    table.increments('id_endereco');
    table.integer('cep',12).unique().notNullable();
    table.string('rua',50).notNullable();
    table.string('complemento',100).notNullable();
    table.string('logradouro',10).notNullable();
    table.integer('numero',5).unique().notNullable();
    table.string('bairro',100).notNullable();
    table.string('cidade',100).notNullable();
    table.string('estado',100).notNullable();
    table.string('municipio',50).notNullable();

    
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async function(knex) {
  return await knex.schema.dropTable('endereco');
};


exports.up = async function(knex) {
  return await knex.schema.createTable('unidades', (table) =>{

    table.increments('id_unidade');
    // table.string('municipio',50).unique().notNullable();
    table.integer('inscricao_mte').unique().notNullable();
    table.string('nome_unidade',100).unique().notNullable();
    table.string('sec_pasta',100).unique().notNullable();
    table.string('servicos',100).unique().notNullable();
    table.string('imovel',50).unique().notNullable();
    table.string('tipo_imovel',50).unique().notNullable();
    // table.time('horario_funcionamento').notNullable();
    table.string('tipo_unidade',10).notNullable();


    
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async function(knex) {
  return await knex.schema.dropTable('unidades');
};

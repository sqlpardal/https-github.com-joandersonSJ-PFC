
exports.up = async function(knex) {
  await knex.schema.table('funcionarios', table =>{

    table.integer('id_documento').unsigned();
    table.foreign('id_documento')
    .references('documentos.id_documentos')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  })

  await knex.schema.table('documentos', table =>{

    table.integer('id_funcionario').unsigned();
    table.foreign('id_funcionario')
    .references('funcionarios.id_funcionario')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  })
};

exports.down = async function(knex) {
  await knex.schema.table('documentos', table =>{
    table.dropForeign('id_funcionario');
    table.dropColumn('id_funcionario');
  })

  await knex.schema.table('funcionarios', table =>{
    table.dropForeign('id_documento');
    table.dropColumn('id_documento');
  })
};

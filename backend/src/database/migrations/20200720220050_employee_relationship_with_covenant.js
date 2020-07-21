
exports.up = async function(knex) {
  await knex.schema.table('funcionarios', table =>{

    table.integer('id_convenio').unsigned();
    table.foreign('id_convenio')
    .references('convenio.numero_convenio')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  })

  await knex.schema.table('convenio', table =>{

    table.integer('id_funcionario').unsigned();
    table.foreign('id_funcionario')
    .references('funcionarios.id_funcionario')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  })
};

exports.down = async function(knex) {
  await knex.schema.table('convenio', table =>{
    table.dropForeign('id_funcionario');
    table.dropColumn('id_funcionario');
  })

  await knex.schema.table('funcionarios', table =>{
    table.dropForeign('id_convenio');
    table.dropColumn('id_convenio');
  })
};

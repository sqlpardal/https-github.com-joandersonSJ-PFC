
exports.up = async function(knex) {
  await knex.schema.table('unidades', table =>{

    table.integer('id_convenio').unsigned();
    table.foreign('id_convenio')
    .references('convenio.numero_convenio')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  })

  await knex.schema.table('convenio', table =>{

    table.integer('id_unidade').unsigned();
    table.foreign('id_unidade')
    .references('unidades.id_unidade')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  })
};

exports.down = async function(knex) {
  await knex.schema.table('convenio', table =>{
    table.dropForeign('id_unidade');
    table.dropColumn('id_unidade');
  })

  await knex.schema.table('unidades', table =>{
    table.dropForeign('id_convenio');
    table.dropColumn('id_convenio');
  })
};

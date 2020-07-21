
exports.up = async function(knex) {

  await knex.schema.table('funcionarios', table =>{

    table.integer('id_unidade').unsigned();
    table.foreign('id_unidade')
    .references('unidades.id_unidade')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  })
};

exports.down = async function(knex) {

  await knex.schema.table('funcionarios', table =>{
    table.dropForeign('id_unidade');
    table.dropColumn('id_unidade');
  })
};

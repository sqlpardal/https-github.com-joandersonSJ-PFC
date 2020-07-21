
exports.up = async function(knex) {

  await knex.schema.table('unidades', table =>{

    table.integer('id_telefone').unsigned();
    table.foreign('id_telefone')
    .references('telefone.id_numero')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  })
};

exports.down = async function(knex) {

  await knex.schema.table('unidades', table =>{
    table.dropForeign('id_telefone');
    table.dropColumn('id_telefone');
  })
};

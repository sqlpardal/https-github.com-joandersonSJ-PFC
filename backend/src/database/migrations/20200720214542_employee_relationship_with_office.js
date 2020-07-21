
exports.up = async function(knex) {
  await knex.schema.table('funcionarios', table =>{

    table.integer('id_cargo').unsigned();
    
    table.foreign('id_cargo')
    .references('cargos.id_cargo')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  })
};

exports.down = async function(knex) {

  await knex.schema.table('funcionarios', table =>{
    table.dropForeign('id_cargo');
    table.dropColumn('id_cargo');
  })

};

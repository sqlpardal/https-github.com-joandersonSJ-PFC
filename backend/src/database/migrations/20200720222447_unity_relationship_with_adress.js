exports.up = async function(knex) {
    await knex.schema.table('unidades', table =>{
  
      table.integer('id_endereco').unsigned();
      table.foreign('id_endereco')
      .references('endereco.id_endereco')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  
    })
  
  };
  
  exports.down = async function(knex) {
  
    await knex.schema.table('unidades', table =>{
      table.dropForeign('id_endereco');
      table.dropColumn('id_endereco');
    })
  };
  

exports.up = function(knex) {
  return knex.schema.createTable('funcionarios', (table) =>{

    table.increments('id_funcionario');
    table.integer('matricula_funcionario',12).unique().notNullable();
    table.string('nome',100).notNullable();
    table.date('data_de_nascimento').notNullable();
    table.string('sexo',1);
    table.string('email',60).unique().notNullable();
    table.string('escolaridade',50).notNullable();
    table.string('situacao_func',50).notNullable();
    table.string('vinculo',50).notNullable();
    table.date('data_vinculo').notNullable();
    table.string('atividades',100).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('funcionarios');
};

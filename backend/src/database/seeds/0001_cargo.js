
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cargos').del()
    .then(function () {
      // Inserts seed entries
      return knex('cargos').insert([
        {nome_cargo: 'coordenador'},
        {nome_cargo: 'diretor'},
        {nome_cargo: 'superintendente'},
        {nome_cargo: 'secretario'},
        {nome_cargo: 'supervisor'},
        {nome_cargo: 'administrativo'},
        {nome_cargo: 'assistente'}
      ]);
    });
};

const knex = require('knex');
const knexFile = require('../../knexfile');

const configuracao = knex(knexFile.development);

module.exports = configuracao;
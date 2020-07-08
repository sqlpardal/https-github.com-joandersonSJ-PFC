const knex = require('knex');
const knexFile = require('../../knexfile');

knex(knexFile.development);

module.exports = knex;
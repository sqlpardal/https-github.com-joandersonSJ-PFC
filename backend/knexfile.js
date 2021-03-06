// Update with your config settings.
const { resolve } = require('path')
require('dotenv').config()

module.exports = {


  // development:{
  //   client: 'sqlite3',
  //   connection: {
  //     filename: resolve('src','database','db.sqlite')
  //   },
  //   migrations:{
  //     directory: resolve('src', 'database', 'migrations')
  //   },
  //   useNullAsDefault: true
    
  // },
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME || 'PFC',
      user:     process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      port: process.env.DB_PORT || '3308'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
  }

};

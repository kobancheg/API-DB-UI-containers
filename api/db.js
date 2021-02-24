const Pool = require('pg').Pool;

const { DB_HOST } = process.env;

const pool = new Pool({
  user: 'camopu',
  password: 'pgpassword',
  host: DB_HOST,
  port: 5432,
  database: 'fastify-db'
})

// const pool = new Pool({
//   user: 'camopu',
//   password: '',
//   host: 'localhost',
//   port: 5432,
//   database: 'node_postgres'
// })

module.exports = pool;

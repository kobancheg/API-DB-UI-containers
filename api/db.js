const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'camopu',
//   password: 'pgpassword',
//   host: 'host.docker.internal',
//   port: 5432,
//   database: 'fastify-db'
// })

const pool = new Pool({
  user: 'camopu',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'node_postgres'
})

module.exports = pool;

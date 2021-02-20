const fastify = require("fastify");
const fastifyCors = require("fastify-cors");
const { Client } = require("pg");

// Setup the database connection:
const client = new Client({
  connectionString: process.env.PGSTRING
});

// Setup the Fastify instance & plugins:
const server = fastify({ logger: true });

server.register(fastifyCors, {});

server.get("/", async (request, reply) => {
  const sql = "SELECT * FROM todos";
  const result = await client.query(sql);
  reply.send(result.rows);
});

server.post("/", async (request, reply) => {
  const sql = "INSERT INTO todos (text) VALUES ($1)";
  const values = [request.body.text];
  const result = await client.query(sql, values);
  reply.send(result);
});

server.delete("/:id", async (request, reply) => {
  const sql = "DELETE FROM todos WHERE id = $1";
  const values = [request.params.id];
  const result = await client.query(sql, values);
  reply.send(result);
});

(async () => {
  try {

    await client.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id serial PRIMARY KEY,
        text TEXT NOT NULL,
        status BOOLEAN DEFAULT false
      );
    `);

    await server.listen(8080);
    console.info("App started correctly");

  } catch (err) {
    console.error(`Boot Error: ${err.message}`);
  }
})();

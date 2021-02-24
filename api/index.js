const fastify = require('fastify')({ logger: true });

const {PORT, HOST} = process.env;

fastify.register(require('fastify-cors'), {
  origin: '*',
  credentials: true
})

fastify.register(require('./routes/user.routes'));
fastify.register(require('./routes/post.routes'));

const start = async () => {
  try {
    await fastify.listen(PORT, HOST)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

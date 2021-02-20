const fastify = require('fastify')({ logger: true });

const PORT = 3000;
const HOST = '0.0.0.0';

fastify.register(require('fastify-cors'), {
  origin: '*',
  methods: ['GET', 'PUT', 'POST']
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

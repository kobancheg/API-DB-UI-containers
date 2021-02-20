const userController = require('../controller/user.controller');

async function routes(fastify, options) {

  fastify.post('/api/user', async (request, reply) => {
    const args = request.body;
    const newUser = await userController.createUser(args);

    reply.send(newUser);
    return newUser;
  });

  fastify.get('/api/user', async (request, reply) => {
    const users = await userController.getUsers();

    reply.send(users);
    return users;
  });

  fastify.get('/api/user/:id', async (request, reply) => {
    const id = request.params.id
    const user = await userController.getOneUser(id);

    reply.send(user);
    return user;
  });

  fastify.put('/api/user', async (request, reply) => {
    const args = request.query;
    const user = await userController.updateUser(args);

    reply.send(user);
    return user;
  });

  fastify.delete('/api/user/:id', async (request, reply) => {
    const id = request.params.id
    const user = await userController.deleteUser(id);

    reply.send(user);
    return user;
  });
}

module.exports = routes

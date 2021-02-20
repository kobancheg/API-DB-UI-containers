const postController = require('../controller/post.controller');

async function routes(fastify, options) {

  fastify.post('/api/post', async (request, reply) => {
    const args = request.body;
    const newPost = await postController.createPost(args);

    reply.send(newPost);
    return newPost;
  });

  fastify.get('/api/post', async (request, reply) => {
    const posts = await postController.getPosts();

    reply.send(posts);
    return posts;
  });

  fastify.get('/api/post/:id', async (request, reply) => {
    const id = request.params.id
    const posts = await postController.getPostById(id);

    reply.send(posts);
    return posts;
  });
}

module.exports = routes

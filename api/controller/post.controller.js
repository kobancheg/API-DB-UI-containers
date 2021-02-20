const db = require('../db');

class PostController {
  async createPost({ title, content, userId }) {

    const newPost = await db.query(
      `INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, userId]
    );

    return newPost.rows[0];
  }

  async getPosts() {

    const { rows } = await db.query(`SELECT * FROM post`);
    return rows
  }

  async getPostById(id) {

    const { rows } = await db.query(`SELECT * FROM post WHERE id = $1`, [id]);
    return rows
  }
}

module.exports = new PostController();

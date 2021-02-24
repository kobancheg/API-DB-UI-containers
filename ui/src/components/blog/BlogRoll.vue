<template>
  <div class="text-4xl font-bold mb-4">My Blog Roll</div>
  <div v-for="post in posts" :key="post.id">
    <div class="bg-gray-200 mb-4 shadow p-2 rounded">
      <div class="text-2xl font-semibold">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </div>
      <div class="mt-2 bg-gray-400 p-2 text-gray-700 rounded">
        {{ post.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  methods: {
    fetchPosts() {
      const apiUrl = process.env.VUE_APP_API_URL;
      const apiPort = process.env.VUE_APP_API_PORT;

      fetch(`http://${apiUrl}:${apiPort}/api/post`)
        .then(response => response.json())
        .then(data => (this.posts = data));
    }
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>

<style></style>

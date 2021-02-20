<template>
  <div>
    <div class="text-4xl font-bold">{{ post.title }}</div>
    <div>{{ post.content }}</div>
    <div class="italic mt-4">
      Author: <span class="text-red-500">{{ user.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      user: {}
    };
  },
  methods: {
    fetchPost() {
      fetch(`http://localhost:3000/api/post/${this.$route.params.id}`)
        .then(response => response.json())
        .then(([data]) => (this.post = data))
        .then(() => {
          fetch(`http://localhost:3000/api/user/${this.post.user_id}`)
            .then(response => response.json())
            .then(data => (this.user = data));
        });
    }
  },
  mounted() {
    this.fetchPost();
  }
};
</script>

<style></style>

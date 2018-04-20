<template>
  <a :href=featuredPodcast.url target="_blank">
    <div class="podcast-hero">
      <div class="content">
        <div>
          <img v-if=featuredPodcast.image :src="'static/images/' + featuredPodcast.image" />
        </div>
        <div>
          <div>
            {{ featuredPodcast.name }}
          </div>
          <div>
            {{ featuredPodcast.description }}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: [
    'featuredPodcast',
  ],
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.podcast-hero {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid gray;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="podcast-item">
      <div class="content">
          <a :href=podcast.url target="_blank">
              <div>
                  <img v-if=podcast.image :src="'static/images/' + podcast.image" />
              </div>
          </a>
          <div>
              <h4>
                  {{ podcast.name }}
              </h4>
              {{ podcast.description }}
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: [
    'podcast',
  ],
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.podcast-item {
  border: 1px solid gray;
  margin: 20px;
  padding: 20px;
  flex: 1 0 28%;
}

.content {
    display: flex;
}

img {
    max-width: 100px;
}
</style>

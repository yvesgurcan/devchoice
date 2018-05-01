<template>
    <div class="podcast-list">
        <podcast-item v-for="podcast in podcasts" :key=podcast.name :podcast=podcast />
    </div>
</template>

<script>
import PodcastItem from './podcast-item';

export default {
  props: [
    'podcasts',
  ],
  components: {
    PodcastItem,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.podcast-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 900px) {
  .podcast-list {
    flex-direction: column;
  }
}

</style>

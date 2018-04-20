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
    flex-basis: auto;
    justify-content: center;
}
</style>

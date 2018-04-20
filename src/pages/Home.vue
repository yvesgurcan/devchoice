<template>
  <div id="main">
    <podcast-hero :featuredPodcast=featuredPodcast />
    <podcast-list :podcasts=podcasts />
  </div>
</template>

<script>
import PodcastHero from '@/components/podcast-hero';
import PodcastList from '@/components/podcast-list';

export default {
  components: {
    PodcastHero,
    PodcastList,
  },
  data() {
    console.log(window.data)
    return {
      featuredPodcast: window.data.podcasts[0],
      podcasts: window.data.podcasts.filter((podcast, index) => index !== 0)
    };
  },
};
</script>

<style scoped>
</style>

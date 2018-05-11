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
    const debug = false;

    const featuredPodcast = window.data.podcasts
      .filter(podcast => debug || !podcast.hidden)
      .filter(podcast => debug || !podcast.addedOn || new Date() > new Date(podcast.addedOn))
      .filter(podcast => podcast.link)[0];

    const podcasts = window.data.podcasts
      .filter(podcast => podcast !== featuredPodcast)
      .filter(podcast => debug || !podcast.hidden)
      .filter(podcast => debug || !podcast.addedOn || new Date() > new Date(podcast.addedOn))
      .filter(podcast => podcast.link);

    return {
      featuredPodcast,
      podcasts,
    };
  },
};
</script>

<style scoped>
</style>

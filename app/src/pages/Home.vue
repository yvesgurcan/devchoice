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
    const featuredPodcast = window.data.podcasts
        .filter(podcast => !podcast.hidden)
        .filter(podcast => !podcast.addedOn || new Date() > new Date(podcast.addedOn))
        [0]

    const podcasts = window.data.podcasts
        .filter(podcast => podcast !== featuredPodcast)
        .filter(podcast => !podcast.hidden)
        .filter(podcast => !podcast.addedOn || new Date() > new Date(podcast.addedOn))

    return {
      featuredPodcast,
      podcasts,
    }
  },
}
</script>

<style scoped>
</style>

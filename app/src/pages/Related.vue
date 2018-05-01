<template>
  <div id="main">
    <podcast-hero :featuredPodcast=featuredPodcast />
    <podcast-list :podcasts=relatedPodcasts />
  </div>
</template>

<script>
import urlify from '@/utils/urlify';
import PodcastHero from '@/components/podcast-hero';
import PodcastList from '@/components/podcast-list';

export default {
  components: {
    PodcastHero,
    PodcastList,
  },
  data() {
    return {
    };
  },
  computed: {
    featuredPodcastArray: function featuredPodcastArray() {
      return window.data.podcasts
        .filter(podcast => !podcast.hidden)
        .filter(podcast => !podcast.addedOn || new Date() > new Date(podcast.addedOn))
        .filter(podcast => urlify(podcast.name
        || podcast.nameSlug) === urlify(this.$route.params.podcast))
        .filter(podcast => urlify(podcast.episode
        || podcast.episodeSlug) === urlify(this.$route.params.episode));
    },
    featuredPodcast: function featuredPodcast() {
      return (this.featuredPodcastArray.length > 0 && this.featuredPodcastArray[0]) || {};
    },
    relatedPodcasts: function relatedPodcasts() {
      return window.data.podcasts
        .filter(podcast => this.featuredPodcast !== podcast)
        .filter(podcast => !podcast.hidden)
        .filter(podcast => !podcast.addedOn || new Date() > new Date(podcast.addedOn))
        .filter(podcast => podcast.url)
        .filter(podcast => [
          ...urlify(podcast.episode || podcast.episodeSlug).split('-'),
          ...urlify(podcast.name || podcast.nameSlug).split('-'),
        ]
          .filter(word =>
            word.length > 2
            && ['the', 'in'].filter(smallWord =>
              String(word).toLowerCase().indexOf(smallWord) !== -1).length === 0)
          .filter(fragment => [urlify(this.$route.params.episode), urlify(this.$route.params.podcast)].join('-')
            .indexOf(fragment) > -1).length > 0);
    },
  },
};
</script>

<style scoped>
</style>

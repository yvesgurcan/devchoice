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
    return {
      featuredPodcast: {
        name: 'Featured podcast',
        description: 'A compelling description.',
        url: 'http://www.google.com',
        image: 'https://d33wubrfki0l68.cloudfront.net/ca0061c3c33c88b2b124e64ad341e15e2a17af49/c8765/images/alligator-logo3.svg',
      },
      podcasts: [
        {
          name: 'Some podcast1',
          description: 'Another good description.',
          url: 'http://www.yahoo.com',
          image: 'https://d33wubrfki0l68.cloudfront.net/ca0061c3c33c88b2b124e64ad341e15e2a17af49/c8765/images/alligator-logo3.svg',
        },
        {
          name: 'Some podcast2. yep',
          description: 'Another good description.',
          url: 'http://www.yahoo.com',
          image: 'https://d33wubrfki0l68.cloudfront.net/ca0061c3c33c88b2b124e64ad341e15e2a17af49/c8765/images/alligator-logo3.svg',
        },
        {
          name: 'Some podcast3',
          description: 'Another good description.',
          url: 'http://www.yahoo.com',
          image: 'https://d33wubrfki0l68.cloudfront.net/ca0061c3c33c88b2b124e64ad341e15e2a17af49/c8765/images/alligator-logo3.svg',
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>

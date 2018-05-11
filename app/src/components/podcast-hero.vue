<template>
    <div class="podcast-hero" ref="featuredPodcast">
      <div class="content">
        <div class="image">
          <a :href=featuredPodcast.link target="_blank">
           <img v-if=featuredPodcast.image :src="'static/images/' + featuredPodcast.image" />
          </a>
        </div>
        <div>
          <h3>
            <router-link :to="'?a=' + episodeUrlified">
              {{ featuredPodcast.episode }}
            </router-link>
          </h3>
          <div class="podcast-name">
              {{ featuredPodcast.name }}
          </div>
          <div class="podcast-description">
            {{ featuredPodcast.description }}
          </div>
          <div class="button-container">
            <button-link label="Listen now" :href=featuredPodcast.link target="_blank" />
            <button-link label="More like this" route=true :href="
              '/' +
              nameUrlified + '/'
              + episodeUrlified" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import urlify from '@/utils/urlify';
import ButtonLink from './button-link';

export default {
  props: [
    'featuredPodcast',
  ],
  components: {
    ButtonLink,
  },
  data() {
    return {
      nameUrlified: urlify(this.featuredPodcast.nameSlug || this.featuredPodcast.name),
      episodeUrlified: urlify(this.featuredPodcast.episodeSlug || this.featuredPodcast.episode),
    };
  },
  mounted() {
    if (this.$route.query.a === this.nameUrlified
    || this.$route.query.a === this.episodeUrlified) {
      window.scrollBy({
        top: this.$refs.featuredPodcast.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth',
      });
    }
  },
};
</script>

<style scoped>
.podcast-hero {
  margin: 20px;
  padding: 40px;
  border: 1px solid gray;
  background: #666;
  color: #eee;
  font-size: 20px;
  line-height: 160%;
}

@media (max-width: 900px) {
  .podcast-hero {
    padding: 20px;
  }
}

.content {
  display: flex;
  margin: auto;
  max-width: 900px;
}

@media (max-width: 550px) {
  .content {
    flex-direction: column;
  }
}

img {
    max-width: 200px;
    margin-right: 80px;
}

@media (max-width: 550px) {
  img {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .image {
    text-align: center;
  }
}

img:hover {
  filter: grayscale(0.6);
}

@media (max-width: 900px) {
  img {
    max-width: 100px;
    margin-right: 20px;
  }
}

h3 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 30px;
}

h3 a {
  color: inherit;
}

h3 a:hover {
  color: #ccc;
}

.podcast-name {
  margin-bottom: 20px;
  font-style: italic;
}

.button-container {
  justify-content: left;
}
</style>

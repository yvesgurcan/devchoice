<template>
  <div class="podcast-item" ref="podcast">
      <div class="wrapper">
          <div class="content">
              <div class="image">
                  <a :href=podcast.url target="_blank">
                      <img v-if=podcast.image :src="'static/images/' + podcast.image" />
                  </a>
              </div>
              <div>
                  <h4>
                      <router-link :to="'?a=' + episodeUrlified">
                          {{ podcast.episode }}
                      </router-link>
                  </h4>
                  <div class="podcast-name">
                      {{ podcast.name }}
                  </div>
                  <div class="podcast-description">
                      {{ podcast.description }}
                  </div>
              </div>
          </div>
          <div class="button-container">
              <button-link label="Listen now" :href=podcast.link target="_blank" />
              <button-link label="More like this" route=true :href="
              '/' +
              nameUrlified + '/'
              + episodeUrlified" />
          </div>
      </div>
  </div>
</template>

<script>
import urlify from '@/utils/urlify';
import ButtonLink from './button-link';

export default {
  props: [
    'podcast',
  ],
  components: {
    ButtonLink,
  },
  data() {
    return {
      nameUrlified: urlify(this.podcast.nameSlug || this.podcast.name),
      episodeUrlified: urlify(this.podcast.episodeSlug || this.podcast.episode),
    };
  },
  mounted() {
    if (this.$route.query.a === this.nameUrlified
    || this.$route.query.a === this.episodeUrlified) {
      window.scrollBy({
        top: this.$refs.podcast.getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth',
      });
    }
  },
};
</script>

<style scoped>
.podcast-item {
  border: 1px solid gray;
  margin: 20px;
  padding: 20px;
  flex: 1 0 28%;
  background: #333;
  color: #ddd;
  font-size: 19px;
  line-height: 150%;
}

.wrapper {
  /* justify-content: center; */
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  max-width: 900px;
}

@media (max-width: 550px) {
  .content {
    flex-direction: column;
  }
}

img {
    max-width: 100px;
    margin-right: 20px;
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

h4 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 23px;
}

h4 a {
  color: inherit;
}
h4 a:hover {
  color: #bbb;
}

.podcast-name {
  margin-bottom: 20px;
  font-style: italic;
}

.podcast-description {
  margin-bottom: 10px;
}

</style>

<template>
  <a :href=podcast.url target="_blank">
    <div class="podcast-item">
        <div class="content">
            <div>
                <img v-if=podcast.image :src="'static/images/' + podcast.image" />
            </div>
            <div>
                <h4>
                    {{ podcast.name }}
                </h4>
                {{ podcast.description }}
            </div>
        </div>
    </div>
  </a>
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
    width: 30vw;
    box-sizing: border-box;
}

.content {
    display: flex;
}

img {
    max-width: 100px;
}
</style>

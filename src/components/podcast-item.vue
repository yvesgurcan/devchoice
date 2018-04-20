<template>
  <a :href=podcast.url target="_blank">
    <div class="podcast-item">
        <h4>
            {{ podcast.name }}
        </h4>
        <div class="content">
            <div>
                <img :src=podcast.image />
            </div>
            <div>
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
</style>

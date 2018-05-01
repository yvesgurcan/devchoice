<template>
    <router-link v-if=route class="button" :to=href>
      {{ label }}
    </router-link>
    <a v-else class="button" :href=href :target=target>
      {{ label }}
    </a>
</template>

<script>

export default {
  props: [
    'label',
    'href',
    'target',
    'route',
  ],
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.button {
  padding: 10px;
  cursor: pointer;
  padding-left: 30px;
  padding-right: 30px;
}

.button:hover {
  background: cadetblue;
}

</style>

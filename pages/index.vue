<template commit>
  <div class="home" ref="home">
    <Article />
  </div>
</template>

<script>
import Article from "@/components/home/articleList";
export default {
  name: "Home",
  components: {
    Article
  },
  created() {
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>

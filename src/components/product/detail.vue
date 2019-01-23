<template>
  <div class="product-detail">
    <img class="image" src="@/assets/pic_denglu.png">
    <div></div>
    <div></div>
    <div class="comment bg-white" @click="goComment()">全部点评</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    goComment() {
      this.$router.push({
        path: "/commentList"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-detail .image {
  height: 232px;
  width: 100%;
}
.comment {
  height: 147px;
  widows: 100%;
}
</style>

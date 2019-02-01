<template>
  <div class="info-big bg-white" @click="goDetail()">
    <img :src="data.main_thumb_urls">
    <div class="pd8">
      <p class="text1">{{data.title}}</p>
      <p class="text2">{{data.subtitle}}</p>
      <p class="text3">¥{{data.default_price}}起</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBig",
  props: ["data"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    goDetail() {
      this.$router.push({
        path: "/productDetail",
        query: {
          id: this.data.id
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info-big {
  width: 100%;
  height: 215px;
  display: inline-block;
  border-radius: 5px;
  margin-bottom: 12px;
}
.info-big img {
  width: 100%;
  height: 128px;
}
.info-big .text1 {
  font-size: 16px;
  color: #383838;
  font-weight: 500;
}
.info-big .text2 {
  font-size: 13px;
  color: #808080;
}
.info-big .text3 {
  font-size: 16px;
  color: #00c759;
  margin-top: 2px;
  font-weight: 500;
}
</style>

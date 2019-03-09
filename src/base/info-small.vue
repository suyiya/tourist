<template>
  <div class="info-small bg-white" @click="goDetail()">
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
  name: "InfoSmall",
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
.info-small {
  width: 160px;
  height: 200px;
  display: inline-block;
  margin-right: 8px;
  border-radius: 5px;
}
.info-small img {
  width: 100%;
  height: 100px;
}
.info-small .text1 {
  font-size: 16px;
  color: #383838;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-small .text2 {
  font-size: 13px;
  color: #808080;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-small .text3 {
  font-size: 16px;
  color: #00c759;
  margin-top: 2px;
  font-weight: 500;
}
</style>

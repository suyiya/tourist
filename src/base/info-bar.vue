<template>
  <div class="product-info-bar">
    <div class="product-left">
      <img :src="imageUrl">
    </div>
    <div class="product-right">
      <p class="text5">{{title}}</p>
      <p class="text4">套餐类型：{{p_title}}</p>
      <p class="text4">意向日期: {{time}}</p>
      <p class="text4">购买数量: {{amount}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBar",
  props: ["time", "imageUrl", "title", "amount", "p_title"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    goDetail() {
      this.$router.push({
        path: "/productDetail"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info-bar {
  display: inline-block;
}
.product-info-bar {
  background-color: #ffffff;
  display: flex;
}
.product-left {
  width: 66px;
}
.product-left img {
  width: 54px;
  height: 54px;
  border-radius: 5px;
}
.product-right {
  flex: 1;
}
.product-right .text4 {
  color: #808080;
  font-size: 12px;
  margin-bottom: 2px;
}
.product-right .text5 {
  color: #383838;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 3px;
}
</style>

<template>
  <div class="product-info-bar">
    <div class="product-left">
      <img/>
    </div>
    <div class="product-right">
      <p class="text5">泰国清迈高尔夫之旅3天2晚1球半日观光</p>
      <p class="text4">套餐类型：绿谷球场+大岛球场，入住慧兰娜</p>
      <p class="text4">意向日期: 2019-01-18</p>
      <p class="text4">购买数量: 成人x1</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBar",
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
  background: green;
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

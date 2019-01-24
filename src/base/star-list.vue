<template>
  <div class="star-container">
    <img :src="selectStar" @click="clickStar(1)">
    <img :src="number>1?selectStar:unStar" @click="clickStar(2)">
    <img :src="number>2?selectStar:unStar" @click="clickStar(3)">
    <img :src="number>3?selectStar:unStar" @click="clickStar(4)">
    <img :src="number>4?selectStar:unStar" @click="clickStar(5)">
  </div>
</template>

<script>
export default {
  name: "StarList",
  data() {
    return {
      number: 1
    };
  },
  created() {
    this.selectStar = require("@/assets/btn_yipingxing.png");
    this.unStar = require("@/assets/btn_weipingxing.png");
  },
  methods: {
    clickStar(number) {
      this.number = number;
      this.$emit("getNum", number);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.star-container {
  display: flex;
  align-items: center;
}
.star-container img {
  width: 23px;
  height: 22px;
  margin-right: 15px;
}
</style>

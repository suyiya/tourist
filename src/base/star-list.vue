<template>
  <div class="star-container" @click="goDetail()">
    <img src="@/assets/btn_yipingxing.png">
    <img src="@/assets/btn_weipingxing.png" @click="clickStar(2)">
    <img src="@/assets/btn_weipingxing.png" @click="clickStar(3)">
    <img src="@/assets/btn_weipingxing.png" @click="clickStar(4)">
    <img src="@/assets/btn_weipingxing.png" @click="clickStar(5)">
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
  methods: {
    clickStar(number) {
      this.number = number;
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

<template>
  <div class="info-small bg-white">
    <img src="@/assets/pic_denglu.png">
    <div class="pd8">
      <p class="text1">日本冲绳4天3晚2球</p>
      <p class="text2">尽享日本冲绳宫古蓝</p>
      <p class="text3">¥5880起</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
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
}
.info-small .text2 {
  font-size: 13px;
  color: #808080;
}
.info-small .text3 {
  font-size: 16px;
  color: #00c759;
  margin-top: 2px;
}
</style>

<template>
  <div>
    <div class="top bg-green"></div>
    <div class="product-info"></div>
    <div class="cust-info"></div>
    <div class="order-info"></div>
    <div class="footer bg-white">
      <div class="botton bg-green">去点评</div>
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
.top {
  height: 84px;
  width: 100%;
}
.product-info {
  height: 129px;
  width: 100%;
  background: #fff;
  margin-top: 10px;
}
.cust-info {
  height: 127px;
  width: 100%;
  background: #fff;
  margin-top: 10px;
}
.order-info {
  height: 157px;
  width: 100%;
  background: #fff;
  margin-top: 10px;
}
.footer {
  height: 63px;
}
.botton {
  height: 47px;
  margin: 8px 16px;
  font-size: 18px;
  color: #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>

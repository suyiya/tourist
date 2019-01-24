<template>
  <div>
    <div class="top bg-green"></div>
    <div class="product-info">
      <p>产品信息</p>
      <info-bar />
    </div>
    <div class="cust-info"></div>
    <div class="order-info"></div>
    <div class="footer bg-white">
      <div class="botton bg-green" @click="submit(0)">去点评</div>
    </div>
  </div>
</template>

<script>
import InfoBar from "@/base/info-bar";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    InfoBar
  },
  methods: {
    submit(index) {
      console.log(index);
      if (index == 0) {
        this.$router.push({
          path: "/comment"
        });
      } else {
        this.$router.push({
          path: ""
        });
      }
    }
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
  background: #fff;
  margin-top: 10px;
  padding: 10px 16px;
}
.product-info p{
  color: #383838;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 10px;
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

<template>
  <div class="order-item">
    <div class="order-top">
      <p>订单编号：32168431664313</p>
      <p>待支付</p>
    </div>
    <div class="order-middle">
      <InfoBar/>
    </div>
    <div class="order-bottom">
      <p>
        需付款:
        <span>￥2486.00</span>
      </p>
    </div>
  </div>
</template>

<script>
import InfoBar from "@/base/info-bar";
export default {
  name: "OrderItem",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    InfoBar
  },
  methods: {
    goList() {
      this.$router.push({
        path: "/productList"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-item {
  background: #ffffff;
  border-radius: 5px;
  padding: 8px 10px;
  margin-bottom: 12px;
}
.order-top {
  margin-bottom: 8px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.order-top p:nth-child(1) {
  color: #383838;
}
.order-top p:nth-child(2) {
  color: #00c759;
}
.order-middle {
  border-top: 1px solid #e1e6e8;
  border-bottom: 1px solid #e1e6e8;
  padding: 14px 0;
}
.order-bottom {
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
  font-size: 12px;
}
.order-bottom p {
  display: flex;
  align-items: center;
  color: #383838;
}
.order-bottom p span {
  color: #00c759;
  font-weight: 600;
  margin-left: 5px;
}
</style>

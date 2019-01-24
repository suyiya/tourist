<template>
  <div>
    <div class="top bg-green c-white">
      <div class="top-bar">
        <p>订单待支付</p>
        <p>¥2480.00</p>
      </div>
      <p class="f11">剩22小时4分自动关闭</p>
    </div>
    <div class="product-info">
      <p class="title">产品信息</p>
      <info-bar/>
    </div>
    <div class="cust-info">
      <p class="title">预订人信息</p>
      <p class="content">
        联系人：
        <span>都璟秀</span>
      </p>
      <p class="content">
        手机号：
        <span>15868489095</span>
      </p>
      <p class="content">
        邮箱：
        <span>doujingxiu128@gm</span>
      </p>
    </div>
    <div class="order-info">
      <p class="title">订单信息</p>
      <p class="content">
        订单编号：
        <span>254712239113095</span>
      </p>
      <p class="content">
        创建时间：
        <span>2018-12-06 15:22</span>
      </p>
    </div>
    <div class="pay-method">
      <p class="content">
        支付方式：
        <span>在线支付</span>
      </p>
    </div>
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
  display: flex;
  padding: 0 16px;
  justify-content: center;
  flex-direction: column;
}
.top-bar {
  display: flex;
  justify-content: space-between;
}
.top-bar p {
  font-size: 14px;
}
.top-bar p:nth-child(2) {
  font-size: 16px;
  font-weight: 900;
}
.product-info {
  background: #fff;
  margin-top: 10px;
  padding: 10px 16px;
}
.title {
  color: #383838;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 10px;
}
.content {
  font-size: 12px;
  color: #383838;
  margin-bottom: 8px;
}
.content span {
  color: #808080;
}
.cust-info {
  width: 100%;
  background: #fff;
  margin-top: 10px;
  padding: 10px 16px;
}
.order-info {
  width: 100%;
  background: #fff;
  margin-top: 10px;
  padding: 10px 16px;
}
.pay-method {
  background: #fff;
  margin-top: 2px;
  padding: 10px 16px;
}
.pay-method p {
  margin-bottom: 0;
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

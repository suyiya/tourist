<template>
  <div>
    <p class="text3">产品信息</p>
    <div class="product-info">
      <div class="product-left">
        <img style="width:54px;height:54px;background:green">
      </div>
      <div class="product-right">
        <p class="text5">泰国清迈高尔夫之旅3天2晚1球半日观光</p>
        <p class="text4">套餐类型：绿谷球场+大岛球场，入住慧兰娜</p>
        <p class="text4">意向日期: 2019-01-18</p>
        <p class="text4">购买数量: 成人x1</p>
      </div>
    </div>
    <p class="text3">预订人信息</p>
    <div class="cus-info">
      <div class="cus-left">
        <p>姓名</p>
        <input placeholder="**文（请输入完整姓名）">
      </div>
      <div class="bor-bottom"></div>
      <div class="cus-left">
        <p>手机号</p>
        <input placeholder="请输入手机号" maxlength="11">
      </div>
      <div class="bor-bottom"></div>
      <div class="cus-left">
        <p>邮箱</p>
        <input placeholder="请输入邮箱">
      </div>
    </div>
    <div class="footer">
      <div class="submit-bar">
        <div class="submit-price">
          <p class="text1">总价</p>
          <p class="c-green text2">￥2048</p>
        </div>
        <div class="bg-green submit-btn" @click="submit()">提交订单</div>
      </div>
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
  },
  methods: {
    submit() {this.$router.push({
        path: "/orderDetail"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-info {
  background-color: #ffffff;
  display: flex;
  padding: 16px;
}
.product-left {
  width: 66px;
}
.product-right {
  flex: 1;
}
.cus-info {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 16px;
}
.submit-bar {
  display: flex;
  width: 100%;
  height: 49px;
  background-color: #ffffff;
}
.submit-price {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 4px 16px;
}
.text1 {
  color: #383838;
  font-size: 12px;
}
.text2 {
  font-size: 20px;
}
.text3 {
  color: #383838;
  font-size: 14px;
  margin-top: 16px;
  margin-left: 15px;
  margin-bottom: 8px;
}
.text4 {
  color: #808080;
  font-size: 12px;
}
.text5 {
  color: #383838;
  font-size: 14px;
}
.submit-btn {
  color: #ffffff;
  font-size: 18px;
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cus-left {
  display: flex;
  height: 44px;
}
.cus-left p {
  width: 90px;
  display: flex;
  align-items: center;
}
.cus-left input {
  flex: 1;
}
.bor-bottom {
  height: 1px;
  widows: 100%;
  border-bottom: 1px solid #e5e5e5;
}
</style>

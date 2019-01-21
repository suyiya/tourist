<template>
  <div>
    <p>产品信息</p>
    <div class="product-info">
      <div></div>
      <div>
        <p>泰国清迈高尔夫之旅3天2晚1球半日观光</p>
        <p>套餐类型：绿谷球场+大岛球场，入住慧兰娜</p>
        <p>意向日期: 2019-01-18</p>
        <p>购买数量: 成人x1</p>
      </div>
    </div>
    <p>预订人信息</p>
    <div class="cus-info">
      <div>
        姓名
        <input placeholder="**文（请输入完整姓名）">
      </div>
      <div>
        手机号
        <input placeholder="请输入手机号">
      </div>
      <div>
        邮箱
        <input placeholder="请输入邮箱">
      </div>
    </div>
    <div class="submit-bar">
      <div>
        <p>总价</p>
        <p>￥2048</p>
      </div>
      <div>提交订单</div>
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
.product-info {
  background-color: #ffffff;
  display: flex;
  padding: 16px;
}
.cus-info {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
}
.submit-bar {
  display: flex;
  width: 100%;
}
</style>

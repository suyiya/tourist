<template>
  <div>
    <div class="top">
      <div class="top-content">
        <img src="@/assets/icon_zhuli.png" style="width:60px;height:60px;margin-right:16px;">
        <div>
          <p class="f17 c-white">乔丹·斯皮思</p>
          <p class="f14 c-white">我的个人签名</p>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="middle-item" @click="clickOrder()">
        <img src="@/assets/btn_wodedingdan.png" style="width:20px;height:22px;">
        <div class="text1">我的订单</div>
      </div>
    </div>
    <div class="bottom">
      <div class="item bg-white">关于我们</div>
    </div>
    <tab :tabIndex="3"></tab>
  </div>
</template>

<script>
import Tab from "@/components/tab/tab";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Tab
  },
  methods: {
    clickOrder() {
      this.$router.push({
        path: "/orderList"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  height: 121px;
  width: 100%;
  background: url("../../assets/bg_wode.png") no-repeat;
  background-size: 100% 100%;
}
.top-content {
  margin-left: 16px;
  padding-top: 25px;
  display: flex;
  align-items: center;
}
.middle {
  height: 76px;
  background: white;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 5px;
  margin-top: -18px;
  padding: 12px;
}
.middle-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 20px;
}
.bottom {
  /* background: white; */
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 10px;
}
.bottom .item {
  height: 52px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #383838;
}
.text1 {
  font-size: 14px;
  color: #383838;
  margin-top: 6px;
}
</style>

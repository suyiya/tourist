<template>
  <div>
    <div class="top"></div>
    <div class="middle">
      <div @click="clickOrder()">我的订单</div>
    </div>
    <div class="bottom">
      <div class="item">关于我们</div>
    </div>
    <tab></tab>
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
  background-color: white;
}
.middle {
  height:76px;
  background: white;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 5px;
}
.bottom{
  background: white;
  border-radius: 5px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 10px;
}
.item {
  height: 52px;
  width: 100%;
}
</style>

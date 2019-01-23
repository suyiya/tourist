<template>
  <div class="mt10">
    <div class="m-item" @click="goToDetail(0)">
      <div class="m-item-left"></div>
      <div class="m-item-right">
        订单消息
      </div>
    </div>
    <div class="m-item" @click="goToDetail(1)">
      <div class="m-item-left"></div>
      <div class="m-item-right">
        系统消息
      </div>
    </div>
    <div class="m-item" @click="goToDetail(2)">
      <div class="m-item-left"></div>
      <div class="m-item-right">
        活动消息
      </div>
    </div>
    <tab :tabIndex="2"></tab>
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
  created() {
    console.log('created')
  },
  components: {
    Tab
  },
  methods: {
    goToDetail(index) {
      console.log(index)
      this.$router.push({
        path: "/messageList",
        query: { index: index }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-item {
  display: flex;
  height: 80px;
  width: 100%;
  background-color: #ffffff;
}
.m-item-left {
  width: 78px;
}
.m-item-right {
  width: 100%;
  border-bottom: 1px solid #e1e6e8;
}
</style>

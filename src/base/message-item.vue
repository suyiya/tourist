<template>
  <div class="message-item">
    <div class="time">
      <p>{{data.notify_time}}</p>
    </div>
    <div class="container">
      <p>开局提醒</p>
      <p>{{data.message}}</p>
      <div @click="clickMessage()">
        <p>点击查看</p>
        <img src="@/assets/btn_jiantou_xiao.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageItem",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  props: ["data"],
  components: {},
  methods: {
    clickMessage() {
      this.$router.push({
        path: "/orderDetail",
        query: {
          id: this.data.orderId
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}
.time {
  color: #ffffff;
  font-size: 10px;
  display: flex;
  justify-content: center;
}
.time p {
  padding: 3px 6px;
  background: #cccccc;
  border-radius: 2px;
}
.container {
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.container p:nth-child(1) {
  padding: 10px 16px 8px 16px;
  color: #383838;
  font-size: 15px;
}
.container p:nth-child(2) {
  color: #808080;
  font-size: 13px;
  padding: 0 16px 10px 16px;
  line-height: 20px;
}
.container div {
  border-top: 1px solid #e1e6e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container div img {
  width: 16px;
  height: 16px;
  margin-right: 16px;
}
</style>

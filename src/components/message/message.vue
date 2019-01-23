<template>
  <div class="mt10">
    <div class="m-item" @click="goToDetail(0)">
      <div class="m-item-left">
        <div class="orange icon-container">
          <img class="icon" src="@/assets/icon_dingdan.png">
        </div>
      </div>
      <div class="m-item-right">
        <div class="info-title">
          <p>订单消息</p>
          <p>2018-12-04</p>
        </div>
        <div class="info-content">您参加的球局已开局，请至开球时间到相应球…</div>
      </div>
    </div>
    <div class="m-item" @click="goToDetail(1)">
      <div class="m-item-left">
        <div class="green icon-container">
          <img class="icon" src="@/assets/icon_xitong.png">
        </div>
      </div>
      <div class="m-item-right">
        <div class="info-title">
          <p>系统消息</p>
          <p>2018-12-04</p>
        </div>
        <div class="info-content">您参加的球局已开局，请至开球时间到相应球…</div>
      </div>
    </div>
    <div class="m-item" @click="goToDetail(2)">
      <div class="m-item-left">
        <div class="blue icon-container">
          <img class="icon" src="@/assets/icon_huodong.png">
        </div>
      </div>
      <div class="m-item-right">
        <div class="info-title">
          <p>活动消息</p>
          <p>2018-12-04</p>
        </div>
        <div class="info-content">您参加的球局已开局，请至开球时间到相应球…</div>
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
    console.log("created");
  },
  components: {
    Tab
  },
  methods: {
    goToDetail(index) {
      console.log(index);
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
  display: flex;
  align-items: center;
  padding-left: 16px;
}
.m-item-right {
  width: 100%;
  border-bottom: 1px solid #e1e6e8;
  padding-right: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.icon-container {
  width: 48px;
  height: 48px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.orange {
  background: #f56f45;
}
.green {
  background: #00c759;
}
.blue {
  background: #0ea7ed;
}
.icon {
  width: 24px;
  height: 24px;
}
.info-title {
  display: flex;
  justify-content: space-between;
}
.info-title p:nth-child(1) {
  color: #383838;
  font-size: 15px;
}
.info-title p:nth-child(2) {
  color: #a6a6a6;
  font-size: 12px;
}
.info-content {
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis;
  color: #a6a6a6;
  font-size: 13px;
  margin-top: 4px;
}
</style>

<template>
  <div>
    <div class="top">
      <div class="top-content">
        <img :src="thumb_url" style="width:60px;height:60px;margin-right:16px;border-radius:50%;">
        <div>
          <p class="f17 c-white">{{nick_name}}</p>
          <!-- <p class="f14 c-white">{{data.introduce}}</p> -->
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
      <div class="item bg-white" @click="about()">
        <span>关于我们</span>
        <img src="@/assets/btn_jiantou_xiao.png">
      </div>
    </div>
    <tab :tabIndex="3"></tab>
  </div>
</template>

<script>
import Tab from "@/components/tab/tab";
// import { loginWechat } from "@/middleware/user";
export default {
  name: "User",
  data() {
    return {
        nick_name: "",
        thumb_url: require("@/assets/icon_zhuli.png"),
        introduce: ""
    };
  },
  components: {
    Tab
  },
  created() {
    let userData = JSON.parse(localStorage.getItem("userData"));
    // console.log(userData)
    this.nick_name = userData.nickname;
    this.thumb_url = userData.headimgurl;

  },
  methods: {
    clickOrder() {
      this.$router.push({
        path: "/orderList"
      });
    },
    about() {
      console.log("about me");
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
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.bottom .item span {
  padding-left: 16px;
}
.bottom .item img {
  width: 20px;
  height: 20px;
  padding-right: 10px;
}
.text1 {
  font-size: 14px;
  color: #383838;
  margin-top: 6px;
}
</style>

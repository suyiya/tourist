<template>
  <div class="footer">
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/">
        <div class="tab-link home" :class="tabIndex==1?'home-sel c-green':'home'">首页</div>
      </router-link>
      <router-link tag="div" class="tab-item" to="/messageList">
        <p class="tab-link message" :class="tabIndex==2?'message-sel c-green':'message'">消息</p>
      </router-link>
      <router-link tag="div" class="tab-item" to="/user">
        <p class="tab-link mine" :class="tabIndex==3?'mine-sel c-green':'mine'">我的</p>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Tab",
  props: ["tabIndex"],
  created() {
    // console.log(this.tabIndex)
  }
};
</script>

<style scoped>
.tab {
  display: flex;
  height: 50px;
  background-color: #ffffff;
  line-height: 50px;
}
.tab-item {
  flex: 1;
  text-align: center;
  font-size: 10px;
  padding-top: 10px;
}
.home {
  background: url("../../assets/icon_shouye_nor.png") no-repeat;
  background-size: 16px 18px;
  background-position-x: 50%;
}
.home-sel {
  background: url("../../assets/icon_shouye_sel.png") no-repeat;
  background-size: 16px 18px;
  background-position-x: 50%;
}
.message {
  background: url("../../assets/icon_xiaoxi_nor.png") no-repeat;
  background-size: 16px 18px;
  background-position-x: 50%;
}
.message-sel {
  background: url("../../assets/icon_xiaoxi_sel.png") no-repeat;
  background-size: 16px 18px;
  background-position-x: 50%;
}
.mine {
  background: url("../../assets/icon_wode_nor.png") no-repeat;
  background-size: 16px 18px;
  background-position-x: 50%;
}
.mine-sel {
  background: url("../../assets/icon_wode_sel.png") no-repeat;
  background-size: 16px 18px;
  background-position-x: 50%;
}
</style>
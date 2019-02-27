<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import WeChatJSBridge from "@/common/utility/wx";
import wx from 'weixin-js-sdk';
export default {
  name: "App",
  created() {
    // this.weChatJSBridge = new WeChatJSBridge();
    // this.weChatJSBridge.getWeChatSignature();
    wx.miniProgram.getEnv(function(res) {
      console.log("minprogram:" + res.miniprogram); // true
      //  alert(JSON.stringify(res));
      if (res.miniprogram === true) {
        localStorage.setItem('isMiniProgram',true)
      } else {
        localStorage.setItem('isMiniProgram',false)
      }
    });
  }
};
</script>

<style>
@import "./common/style/common.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
  background-color: #f7f7f7;
}

input {
  -webkit-appearance: none;
  border: none;
}
textarea {
  -webkit-appearance: none;
  border: none;
}
.footer {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
}
</style>

<template>
  <div>
    <div class="pl16 pb60">
      <div>
        <div>
          <p class="title">热门目的地</p>
        </div>
        <div class="container">
          <info-small/>
          <info-small/>
          <info-small/>
        </div>
      </div>
      <div class="mt28">
        <div class="title-bar">
          <p class="title">境外推荐</p>
          <p class="more" @click="clickMore()">
            更多
            <img src="@/assets/btn_jiantou_xiao_lv.png">
          </p>
        </div>
        <div class="container mt14">
          <info-small/>
          <info-small/>
          <info-small/>
          <info-small/>
        </div>
      </div>
      <div class="mt28">
        <div class="title-bar">
          <p class="title">国内推荐</p>
          <p class="more" @click="clickMore()">
            更多
            <img src="@/assets/btn_jiantou_xiao_lv.png">
          </p>
        </div>
        <div class="container mt14">
          <info-small/>
          <info-small/>
          <info-small/>
          <info-small/>
          <info-small/>
          <info-small/>
        </div>
      </div>
    </div>
    <tab :tabIndex="1"></tab>
  </div>
</template>

<script>
import Tab from "@/components/tab/tab";
import InfoSmall from "@/base/info-small";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    Tab,
    InfoSmall
  },
  methods: {
    clickMore() {
      this.$router.push({
        path: "/productList"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
}
.title {
  color: #383838;
  font-size: 18px;
  font-weight: 500;
}
.container {
  white-space: nowrap;
  overflow-x: scroll;
}
.more {
  color: #00c759;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.more img {
  width: 12px;
  height: 12px;
}
</style>

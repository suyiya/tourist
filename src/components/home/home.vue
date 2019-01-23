<template>
  <div class="pl16 pb60">
    <div>
      <div>
        <p class="title">热门目的地</p>
        <div class="container">
          <info-small />
          <info-small />
          <info-small />
        </div>
      </div>
      <div>
        <p class="title">境外推荐</p>
        <div class="container">
          <info-small />
          <info-small />
          <info-small />
          <info-small />
        </div>
      </div>
      <div>
        <p class="title">国内推荐</p>
        <div class="container">
          <info-small />
          <info-small />
          <info-small />
          <info-small />
          <info-small />
          <info-small />
        </div>
      </div>
    </div>
    <tab :tabIndex="1"></tab>
  </div>
</template>

<script>
import Tab from "@/components/tab/tab";
import InfoSmall from "@/components/product/info-small";
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  color:#383838;
  font-size: 18px;
  font-weight: 500;
}
.container {
  white-space: nowrap;
  overflow-x: scroll;
}
</style>

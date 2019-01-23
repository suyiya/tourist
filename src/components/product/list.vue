<template>
  <div class="container">
    <info-big/>
    <info-big/>
    <info-big/>
    <info-big/>
    <info-big/>
  </div>
</template>

<script>
import InfoBig from "@/base/info-big";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    InfoBig
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 12px 16px;
}
</style>

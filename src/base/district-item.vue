<template>
  <div class="district bg-green c-white" @click="goList()">{{data.name}}</div>
</template>

<script>
export default {
  name: "InfoSmall",
  props: ["data"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    goList() {
      this.$router.push({
        path: "/productList",
        query: {
          region: this.data.region
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.district {
  display: inline-block;
  border-radius: 16px;
  width: 68px;
  height: 26px;
  line-height: 26px;
  font-size: 13px;
  text-align: center;
  margin-right: 8px;
}
</style>

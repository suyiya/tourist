<template>
  <div class="container">
    <info-big v-for="item in travelProductList" :key="item.id" :data="item"/>
  </div>
</template>

<script>
import InfoBig from "@/base/info-big";
import { getTravelProductList } from "@/middleware/product";
export default {
  name: "ProductList",
  data() {
    return {
      travelProductList: []
    };
  },
  components: {
    InfoBig
  },
  created() {
    this._getTravelProductList();
  },
  methods: {
    _getTravelProductList() {
      getTravelProductList().then(res => {
        console.log(res);
        let travelProductList = res.data.travelProductList || [];
        this.travelProductList = travelProductList;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  padding: 12px 16px;
}
</style>

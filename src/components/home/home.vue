<template>
  <div>
    <div class="pl16 pb60">
      <div>
        <div class="mt28">
          <p class="title">热门目的地</p>
        </div>
        <div class="container mt14">
          <district-item v-for="item in districtList" :key="item.id" :data="item"/>
        </div>
        <div class="container mt10">
          <info-small v-for="item in travelProductList" :key="item.id" :data="item"/>
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
          <info-small v-for="item in travelProductList" :key="item.id" :data="item"/>
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
          <info-small v-for="item in travelProductList" :key="item.id" :data="item"/>
        </div>
      </div>
    </div>
    <tab :tabIndex="1"></tab>
  </div>
</template>

<script>
import Tab from "@/components/tab/tab";
import InfoSmall from "@/base/info-small";
import DistrictItem from "@/base/district-item";
import { Indicator } from "mint-ui";
import { getTravelProductList } from "@/middleware/product";
export default {
  name: "Home",
  data() {
    return {
      districtList: [
        { name: "中国", region: "cn" },
        { name: "日本", region: "jp" },
        { name: "东南亚", region: "ea" },
        { name: "新西兰", region: "nl" },
        { name: "澳大利亚", region: "au" }
      ],
      travelProductList: [],
      pageNum: 1
    };
  },
  components: {
    Tab,
    InfoSmall,
    DistrictItem
  },
  created() {
    this._getTravelProductList();
  },
  mounted() {},
  methods: {
    clickMore() {
      this.$router.push({
        path: "/productList"
      });
    },
    _getTravelProductList(pageNum, region) {
      Indicator.open();
      let params = {
        pageNum: pageNum,
        region: region
      };
      getTravelProductList().then(res => {
        console.log(res);
        let travelProductList = res.data.travelProductList || [];
        this.travelProductList = travelProductList;
        Indicator.close();
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

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
        <!-- <div class="container mt10">
          <info-small v-for="item in travelProductList" :key="item.id" :data="item"/>
        </div>-->
      </div>
      <div class="mt28">
        <div class="title-bar">
          <p class="title">推荐行程</p>
          <p class="more" @click="clickMore()">
            更多
            <img src="@/assets/btn_jiantou_xiao_lv.png">
          </p>
        </div>
        <div class="container mt14">
          <info-small v-for="item in overseaList" :key="item.id" :data="item"/>
        </div>
      </div>
      <div class="mt28">
        <div class="title-bar">
          <p class="title">国内推荐</p>
          <p class="more" @click="clickMore('cn')">
            更多
            <img src="@/assets/btn_jiantou_xiao_lv.png">
          </p>
        </div>
        <div class="container mt14">
          <info-small v-for="item in homeList" :key="item.id" :data="item"/>
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
import {
  getTravelProductList,
  getTravelProductListNotCn
} from "@/middleware/product";
import { getUserData } from "@/middleware/user";
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
      homeList: [],
      overseaList: [],
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
    this._getTravelProductListNotCn();
    this._getUserData();
  },
  mounted() {},
  methods: {
    clickMore(region) {
      this.$router.push({
        path: "/productList",
        query: {
          region: region
        }
      });
    },
    /**
     * 国内游
     */
    _getTravelProductList() {
      Indicator.open();
      let params = {
        pageNum: 1,
        region: "cn"
      };
      getTravelProductList(params).then(res => {
        console.log(res);
        let travelProductList = res.data.travelProductList || [];
        this.homeList = travelProductList;
        Indicator.close();
      });
    },

    /**
     * 海外游
     */
    _getTravelProductListNotCn() {
      Indicator.open();
      let params = {
        pageNum: 1
      };
      getTravelProductListNotCn(params).then(res => {
        console.log(res);
        let travelProductList = res.data.travelProductList || [];
        this.overseaList = travelProductList;
        Indicator.close();
      });
    },
    _getUserData() {
      let params = {
        code: util.getUrlParam("code")
      };
      getUserData(params).then(res => {
        console.log(res);
        let userData = res.data;
        let access_token = res.data.access_token;
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("access_token", access_token);
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

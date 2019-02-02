<template>
  <div>
    <div class="pl16 pb60">
      <div>
        <div class="mt28">
          <p class="title">热门目的地</p>
        </div>
        <div class="container mt14">
          <district-item/>
          <district-item/>
          <district-item/>
          <district-item/>
          <district-item/>
          <district-item/>
          <district-item/>
          <district-item/>
          <district-item/>
          <district-item/>
          <district-item/>
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
      travelProductList: [
        {
          point_name: "shanghai",
          days: 3,
          main_thumb_urls:
            "https://www.hole19golf.com/assets/course-profile-default_1-020faf6a99e5096c1e7432ee1da8401b0fd6957f7a6d431d7ea9fe09fe9bc732.jpg",
          creator: 1,
          create_time: "2019-01-07 12:12:12",
          status: 1,
          p_lat: 31.23122,
          p_lon: 123.3456,
          introduce: "this is first travel product introduce",
          way: "this is way of travel",
          feedetail: null,
          exceptions: "this is exception of travel product",
          title: "first travel",
          subtitle: "first travel in shanghai 3 days",
          default_price: 120,
          default_price_introduce: "标配行程价",
          default_price_title: "标配行程价",
          id: 1
        },
        {
          point_name: "shanghai",
          days: 3,
          main_thumb_urls:
            "https://www.hole19golf.com/assets/course-profile-default_1-020faf6a99e5096c1e7432ee1da8401b0fd6957f7a6d431d7ea9fe09fe9bc732.jpg",
          creator: 1,
          create_time: "2019-01-07 12:12:12",
          status: 1,
          p_lat: 31.23122,
          p_lon: 123.3456,
          introduce: "this is first travel product introduce",
          way: "this is way of travel",
          feedetail: null,
          exceptions: "this is exception of travel product",
          title: "second travel",
          subtitle: "second travel in shanghai 3 days",
          default_price: 1220,
          default_price_introduce: "标配行程价",
          default_price_title: "标配行程价",
          id: 2
        },
        {
          point_name: "shanghai",
          days: 3,
          main_thumb_urls:
            "https://www.hole19golf.com/assets/course-profile-default_1-020faf6a99e5096c1e7432ee1da8401b0fd6957f7a6d431d7ea9fe09fe9bc732.jpg",
          creator: 1,
          create_time: "2019-01-07 12:12:12",
          status: 1,
          p_lat: 31.23122,
          p_lon: 123.3456,
          introduce: "this is first travel product introduce",
          way: "this is way of travel",
          feedetail: null,
          exceptions: "this is exception of travel product",
          title: "third travel",
          subtitle: "third travel in shanghai 3 days",
          default_price: 3120,
          default_price_introduce: "标配行程价",
          default_price_title: "标配行程价",
          id: 3
        }
      ]
    };
  },
  components: {
    Tab,
    InfoSmall,
    DistrictItem
  },
  created() {
    // Indicator.close();
    this._getTravelProductList();
  },
  mounted() {
    // Indicator.open();
  },
  methods: {
    clickMore() {
      this.$router.push({
        path: "/productList"
      });
    },
    _getTravelProductList(){
      getTravelProductList().then((res)=>{
        console.log(res)
      })
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

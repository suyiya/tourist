<template>
  <div class="page-loadmore-wrapper" :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      :auto-fill="false"
      ref="loadmore"
    >
      <div class="container">
        <info-big v-for="item in travelProductList" :key="item.id" :data="item"/>
      </div>
    </mt-loadmore>
    <div class="tac" v-if="travelProductList.length<1">暂时没有相关信息</div>
    <record-bar/>
  </div>
</template>

<script>
import InfoBig from "@/base/info-big";
import RecordBar from "@/base/record-bar";
import {
  getTravelProductList,
  getTravelProductListNotCn
} from "@/middleware/product";
import { Indicator } from "mint-ui";
export default {
  name: "ProductList",
  data() {
    return {
      travelProductList: [],
      allLoaded: false,
      pageNum: 1
    };
  },
  components: {
    InfoBig,
    RecordBar
  },
  created() {
    let windowWidth = document.documentElement.clientWidth; //获取屏幕宽度
    if (windowWidth >= 768) {
      //这里根据自己的实际情况设置容器的高度
      this.wrapperHeight = document.documentElement.clientHeight - 105;
    } else {
      this.wrapperHeight = document.documentElement.clientHeight;
    }
    if (this.$route.query.region) {
      this._getTravelProductList();
    } else {
      this._getTravelProductListNotCn();
    }
  },
  methods: {
    _getTravelProductList() {
      let params = {
        region: this.$route.query.region,
        pageNum: this.pageNum
      };
      getTravelProductList(params).then(res => {
        console.log(res);
        let travelProductList = res.data.travelProductList || [];
        this.travelProductList = travelProductList;
        this.$refs.loadmore.onBottomLoaded();
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
        this.travelProductList = travelProductList;
        Indicator.close();
      });
    },
    loadBottom() {
      console.log("loadBottom");
      this._getTravelProductList();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-loadmore-wrapper {
  overflow: scroll;
}
.container {
  padding: 12px 16px;
}
.tac {
  text-align: center;
}
</style>

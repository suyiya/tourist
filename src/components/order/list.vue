<template>
  <div>
    <div class="nav-bar">
      <div class="nav-item" @click="changeNav(-1)">
        <p :class="navType==-1?'selected':''">全部</p>
      </div>
      <div class="nav-item" @click="changeNav(0)">
        <p :class="navType==0?'selected':''">待支付</p>
      </div>
      <div class="nav-item" @click="changeNav(1)">
        <p :class="navType==1?'selected':''">已完成</p>
      </div>
    </div>

    <div class="page-loadmore-wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :auto-fill="false"
        ref="loadmore"
      >
        <div class="container">
          <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <OrderItem :key="item.id" v-for="item in travel_order_list" :data="item"/>
          </mt-loadmore>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import OrderItem from "@/base/order-item";
import { getOrderList } from "@/middleware/order";
import { Loadmore } from "mint-ui";
export default {
  name: "OrderList",
  data() {
    return {
      navType: -1,
      travel_order_list: [],
      allLoaded: false
    };
  },
  created() {
    let windowWidth = document.documentElement.clientWidth; //获取屏幕宽度
    if (windowWidth >= 768) {
      //这里根据自己的实际情况设置容器的高度
      this.wrapperHeight = document.documentElement.clientHeight - 105;
    } else {
      this.wrapperHeight = document.documentElement.clientHeight;
    }
    this._getOrderList();
  },
  components: {
    OrderItem,
    Loadmore
  },
  methods: {
    changeNav(index) {
      this.navType = index;
      this._getOrderList();
    },
    _getOrderList() {
      let params = {
        status: this.navType, // status  -1:全部  0待支付  1 已完成
        pageNum: 1
      };
      getOrderList(params).then(res => {
        console.log(res);
        let travel_order_list = res.data.travel_order_list || [];
        this.travel_order_list = travel_order_list;
        this.$refs.loadmore.onBottomLoaded();
      });
    },
    loadBottom() {
      console.log("loadBottom");
      this._getOrderList();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-loadmore-wrapper {
  overflow: scroll;
}
.nav-bar {
  height: 40px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.nav-item {
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-item p {
  line-height: 40px;
  font-size: 13px;
  color: #383838;
}
.nav-item .selected {
  color: #00c759;
  border-bottom: 2px solid #00c759;
}
.container {
  padding: 12px 16px;
}
</style>

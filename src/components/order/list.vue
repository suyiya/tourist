<template>
  <div>
    <div class="nav-bar">
      <div class="nav-item" @click="changeNav(1)">
        <p :class="navType==1?'selected':''">全部</p>
      </div>
      <div class="nav-item" @click="changeNav(2)">
        <p :class="navType==2?'selected':''">待支付</p>
      </div>
      <div class="nav-item" @click="changeNav(3)">
        <p :class="navType==3?'selected':''">已完成</p>
      </div>
    </div>
    <div class="container">
      <OrderItem :key="item.id" v-for="item in travel_order_list" :data="item"/>
    </div>
  </div>
</template>

<script>
import OrderItem from "@/base/order-item";
import { getOrderList } from "@/middleware/order";
export default {
  name: "OrderList",
  data() {
    return {
      navType: 1,
      travel_order_list: [
        {
          hashId: "TRV_20190108200959CSTstbi0lrxzq",
          create_time: "2019-01-08 20:10:00",
          buyer_id: 18,
          owner_id: 0,
          status: 0,
          discount: 1,
          realpay: 1999,
          tid: 1,
          price_id: 1,
          start_time: "2018-12-12 00:00:00",
          point_name: "shanghai",
          days: 3,
          main_thumb_urls:
            "https://www.hole19golf.com/assets/course-profile-default_1-020faf6a99e5096c1e7432ee1da8401b0fd6957f7a6d431d7ea9fe09fe9bc732.jpg",
          creator: 1,
          tp_create_time: "2019-01-07 12:12:12",
          tp_status: 1,
          p_lat: 31.23122,
          p_lon: 123.3456,
          introduce: "this is first travel product introduce",
          way: "this is way of travel",
          feedetail: null,
          exceptions: "this is exception of travel product",
          title: "first travel",
          subtitle: "first travel in shanghai 3 days",
          id: 1
        }
      ]
    };
  },
  created() {
    this._getOrderList();
  },
  components: {
    OrderItem
  },
  methods: {
    changeNav(index) {
      this.navType = index;
    },
    _getOrderList() {
      getOrderList().then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

<template>
  <div>
    <div class="top bg-green c-white">
      <div class="top-bar">
        <p>订单待支付</p>
        <p>¥{{data.realpay}}</p>
      </div>
      <p class="f11">剩22小时4分自动关闭</p>
    </div>
    <div class="product-info">
      <p class="title">产品信息</p>
      <info-bar
        :time="data.start_time"
        :title="data.title"
        :imageUrl="data.main_thumb_urls"
        :amount="data.pcs"
        :p_title="data.p_title"
      />
    </div>
    <div class="cust-info">
      <p class="title">预订人信息</p>
      <p class="content">
        联系人：
        <span>{{data.contact_name}}</span>
      </p>
      <p class="content">
        手机号：
        <span>{{data.contact_phone}}</span>
      </p>
      <p class="content">
        邮箱：
        <span>{{data.contact_email}}</span>
      </p>
    </div>
    <div class="order-info">
      <p class="title">订单信息</p>
      <p class="content">
        订单编号：
        <span>{{data.hashId}}</span>
      </p>
      <p class="content">
        创建时间：
        <span>{{data.create_time}}</span>
      </p>
    </div>
    <div class="pay-method">
      <p class="content">
        支付方式：
        <span>在线支付</span>
      </p>
    </div>
    <div class="blank"></div>
    <div class="footer bg-white">
      <div class="botton bg-green" @click="submit(0)">去点评</div>
    </div>
  </div>
</template>

<script>
import InfoBar from "@/base/info-bar";
import { getTravelOrderInfo } from "@/middleware/order";
export default {
  name: "OrderDetail",
  data() {
    return {
      data: {
        hashId: "TRV_20190108200959CSTstbi0lrxzq",
        create_time: "2019-01-08 20:10:00",
        buyer_id: 18,
        owner_id: 0,
        status: 0, // 0 待支付 1 已支付 2 已评价结束
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
        pcs: 2,
        p_title: "标配行程价3",
        contact_name: "都璟秀",
        contact_phone: "15868489095",
        contact_email: "doujingxiu128@gm",
        id: 1
      }
    };
  },
  components: {
    InfoBar
  },
  created() {
    this._getTravelOrderInfo();
  },
  methods: {
    submit(index) {
      console.log(index);
      if (index == 0) {
        this.$router.push({
          path: "/comment",
          query: {
            id: this.data.id
          }
        });
      } else {
        this.$router.push({
          path: "/orderConfirm"
        });
      }
    },
    _getTravelOrderInfo() {
      let params = {};
      getTravelOrderInfo().then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  height: 84px;
  display: flex;
  padding: 0 16px;
  justify-content: center;
  flex-direction: column;
}
.top-bar {
  display: flex;
  justify-content: space-between;
}
.top-bar p {
  font-size: 14px;
}
.top-bar p:nth-child(2) {
  font-size: 16px;
  font-weight: 900;
}
.product-info {
  background: #fff;
  margin-top: 10px;
  padding: 10px 16px;
}
.title {
  color: #383838;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 10px;
}
.content {
  font-size: 12px;
  color: #383838;
  margin-bottom: 8px;
}
.content span {
  color: #808080;
}
.cust-info {
  background: #fff;
  margin-top: 10px;
  padding: 10px 16px;
}
.order-info {
  background: #fff;
  margin-top: 10px;
  padding: 10px 16px;
}
.pay-method {
  background: #fff;
  margin-top: 2px;
  padding: 10px 16px;
}
.pay-method p {
  margin-bottom: 0;
}
.footer {
  height: 63px;
}
.botton {
  height: 47px;
  margin: 8px 16px;
  font-size: 18px;
  color: #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.blank {
  margin-bottom: 70px;
}
</style>

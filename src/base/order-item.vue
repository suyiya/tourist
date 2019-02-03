<template>
  <div class="order-item" @click="goOrderDetail()">
    <div class="order-top">
      <p>订单编号：{{data.hashId}}</p>
      <p>{{getStatus}}</p>
    </div>
    <div class="order-middle">
      <InfoBar
        :time="data.start_time"
        :imageUrl="data.main_thumb_urls"
        :title="data.title"
        :p_title="data.p_title"
        :amount="data.pcs"
      />
    </div>
    <div class="order-bottom">
      <p>
        需付款:
        <span>￥{{data.realpay}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import InfoBar from "@/base/info-bar";
export default {
  name: "OrderItem",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  props: ["data"],
  components: {
    InfoBar
  },
  created() {
    console.log(this.data);
  },
  computed: {
    getStatus() {
      let status = this.data.status; // 0 待支付 1 已支付 2 已评价结束
      if (status == 0) {
        return "待支付";
      } else if (status == 1) {
        return "待评价";
      } else if (status == 2) {
        return "已完成";
      } else {
        return "";
      }
    }
  },
  methods: {
    goOrderDetail() {
      this.$router.push({
        path: "/orderDetail",
        query: {
          id: this.data.id
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-item {
  background: #ffffff;
  border-radius: 5px;
  padding: 8px 10px;
  margin-bottom: 12px;
}
.order-top {
  margin-bottom: 8px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.order-top p:nth-child(1) {
  color: #383838;
}
.order-top p:nth-child(2) {
  color: #00c759;
}
.order-middle {
  border-top: 1px solid #e1e6e8;
  border-bottom: 1px solid #e1e6e8;
  padding: 14px 0;
}
.order-bottom {
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
  font-size: 12px;
}
.order-bottom p {
  display: flex;
  align-items: center;
  color: #383838;
}
.order-bottom p span {
  color: #00c759;
  font-weight: 600;
  margin-left: 5px;
}
</style>

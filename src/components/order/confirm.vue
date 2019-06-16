<template>
  <div>
    <p class="text3">产品信息</p>
    <div class="pd16 bg-white">
      <info-bar
        :time="query.time"
        :imageUrl="query.imageUrl"
        :title="query.title"
        :p_title="query.p_title"
        :amount="query.amount"
      />
    </div>
    <p class="text3">预订人信息</p>
    <div class="cus-info">
      <div class="cus-left">
        <p>姓名</p>
        <input type="text" v-model="name" placeholder="请输入完整姓名">
      </div>
      <div class="bor-bottom"></div>
      <div class="cus-left">
        <p>手机号</p>
        <input type="number" v-model="phone" placeholder="请输入手机号" maxlength="11">
      </div>
      <div class="bor-bottom"></div>
      <div class="cus-left">
        <p>邮箱</p>
        <input type="text" v-model="email" placeholder="请输入邮箱">
      </div>
      <div class="bor-bottom"></div>
      <div class="cus-left">
        <p>备注</p>
        <input type="text" v-model="memo" placeholder="请输入备注">
      </div>
    </div>
    <record-bar />
    <div class="footer">
      <div class="submit-bar">
        <div class="submit-price">
          <p class="text1">预付价</p>
          <p
            class="c-green text2"
          >{{query.currency}} {{(query.price * query.amount * 0.1).toFixed(2)}}</p>
        </div>
        <div class="bg-green submit-btn" @click="submit()">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBar from "@/base/info-bar";
import RecordBar from "@/base/record-bar";
import { Toast } from "mint-ui";
import { submitOrder } from "@/middleware/order";
export default {
  name: "OrderConfirm",
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      memo: "",
      query: this.$route.query
    };
  },
  mounted() {
    this.query = this.$route.query;
  },
  methods: {
    submit() {
      if (!this.name || this.name.length < 2) {
        Toast("请输入完整姓名！");
        return;
      }
      if (!util.isPhoneAvailable(this.phone)) {
        Toast("请输入正确的手机号！");
        return;
      }
      if (!util.isEmailAvailable(this.email)) {
        Toast("请输入正确的邮箱！");
        return;
      }
      this._submitOrder();
    },
    /**
     * 提交订单
     */
    _submitOrder() {
      let params = {
        tid: this.$route.query.id,
        price_id: this.$route.query.price_id,
        start_time: `${this.$route.query.time} 00:00:00`,
        pcs: this.$route.query.amount,
        contact_name: this.name,
        contact_phone: this.phone,
        contact_email: this.email,
        memo: this.memo
      };
      submitOrder(params).then(res => {
        console.log(res);
        this.$router.push({
          path: "/orderDetail",
          query: {
            id: res.data.Id
          }
        });
      });
    }
  },
  components: {
    InfoBar,
    RecordBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cus-info {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 16px;
  margin-bottom: 70px;
}
.submit-bar {
  display: flex;
  width: 100%;
  height: 49px;
  background-color: #ffffff;
}
.submit-price {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 4px 16px;
}
.text1 {
  color: #383838;
  font-size: 12px;
  padding-left: 6px;
}
.text2 {
  font-size: 20px;
}
.text3 {
  color: #383838;
  font-size: 14px;
  margin-top: 16px;
  margin-left: 15px;
  margin-bottom: 8px;
}
.submit-btn {
  color: #ffffff;
  font-size: 18px;
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cus-left {
  display: flex;
  height: 44px;
}
.cus-left p {
  width: 90px;
  display: flex;
  align-items: center;
}
.cus-left input {
  flex: 1;
}
.bor-bottom {
  height: 1px;
  widows: 100%;
  border-bottom: 1px solid #e5e5e5;
}
</style>

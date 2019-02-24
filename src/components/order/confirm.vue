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
    </div>
    <div class="footer">
      <div class="submit-bar">
        <div class="submit-price">
          <p class="text1">总价</p>
          <p class="c-green text2">￥{{query.price * query.amount}}</p>
        </div>
        <div class="bg-green submit-btn" @click="submit()">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBar from "@/base/info-bar";
import { Toast } from "mint-ui";
import { submitOrder } from "@/middleware/order";
export default {
  name: "OrderConfirm",
  data() {
    return {
      name: "",
      phone: "",
      email: "",
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
      if (!utli.isPhoneAvailable(this.phone)) {
        Toast("请输入正确的手机号！");
        return;
      }
      if (!utli.isEmailAvailable(this.email)) {
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
        contact_email: this.email
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
    },
    checkIsFromMiniProgram: function(callback) {
      wx.miniProgram.getEnv(function(res) {
        console.log("minprogram:" + res.miniprogram); // true
        //  alert(JSON.stringify(res));
        if (res.miniprogram === true) {
          callback && callback(true);
          // alert('isMiniprogram:' + res.miniprogram);
        } else {
          callback && callback(false);
          // alert("========公众号");
        }
      });
    },
    //跳转到小程序
    navigateToMiniProgram: function(payParam) {
      const url = "/pages/wxPay/wxPay?payParam=" + encodeURIComponent(payParam);
      alert("url:" + url);
      wx.miniProgram.navigateTo({
        url: url
      });
    },
    //小程序和公众号跳转不同页面
    navigateToPay: function() {
      if (this.isMiniProgram === true) {
        // alert('小程序')
        //由后台协商好返回的数据格式，该代码仅供参考，不能实际使用
        const payParam = {
          appId: "wxd678efh567hg6787",
          nonceStr: "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
          package: "prepay_id=wx2017033010242291fcfe0db70013231072",
          signType: "MD5",
          timeStamp: "1490840662",
          paySign: "BB2B9BD3F2F8A1CB270C6ACE3D7BDB9"
        };
        // alert(payParam);
        this.navigateToMiniProgram(JSON.stringify(payParam));
      } else {
        alert("公众号");
        //原先支付逻辑不用修改;
      }
    }
  },
  components: {
    InfoBar
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

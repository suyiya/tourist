<template>
  <div>
    <div class="top bg-green c-white">
      <div class="top-bar">
        <p>订单{{getStatus}}</p>
        <p>{{data.currency}} {{data.realpay}}</p>
      </div>
      <!-- <p class="f11">剩22小时4分自动关闭</p> -->
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
      <p class="content">
        备注：
        <span>{{data.memo}}</span>
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
    <record-bar/>
    <div class="blank"></div>
    <div class="footer bg-white" v-if="data.status!=2">
      <div class="botton bg-green" @click="submit()">{{data.status==0?'去支付':'去点评'}}</div>
    </div>
  </div>
</template>

<script>
import InfoBar from "@/base/info-bar";
import RecordBar from "@/base/record-bar";
import { getTravelOrderInfo, submitPayToWechat } from "@/middleware/order";
import wx from "weixin-js-sdk";
import { appId } from "@/common/utility/constant";
import { Toast } from "mint-ui";
export default {
  name: "OrderDetail",
  data() {
    return {
      data: {}
    };
  },
  computed: {
    getStatus() {
      let status = this.data.status; // 0 待支付 1 已支付 2 已评价结束
      if (status == 0) {
        return "待支付";
      } else if (status == 1) {
        return "已支付";
      } else if (status == 2) {
        return "已完成";
      } else {
        return "";
      }
    }
  },
  components: {
    InfoBar,
    RecordBar
  },
  created() {
    this._getTravelOrderInfo();
  },
  methods: {
    submit() {
      let status = this.data.status;
      if (status == 0) {
        this.navigateToPay();
      } else if (status == 1) {
        this.$router.push({
          path: "/comment",
          query: {
            tid: this.data.tid,
            torder_id: this.data.id
          }
        });
      }
    },

    //跳转到小程序
    navigateToMiniProgram: function() {
      // let openId = JSON.parse(localStorage.getItem("userData")).openid;
      let orderId = this.data.id;
      let order_hash = this.data.hashId;
      const url = `/pages/payment/payment?orderId=${orderId}&order_hash=${order_hash}`;
      // alert("url:" + url);
      wx.miniProgram.navigateTo({
        url: url
      });
    },
    //小程序和公众号跳转不同页面
    navigateToPay: function() {
      let isMiniProgram = localStorage.getItem("isMiniProgram");
      console.log("去支付", isMiniProgram);
      if (isMiniProgram == 1) {
        this.navigateToMiniProgram();
      } else {
        // alert("公众号");
        this._submitPayToWechat();
      }
    },
    _getTravelOrderInfo() {
      let params = {
        orderId: this.$route.query.id
      };
      getTravelOrderInfo(params).then(res => {
        console.log(res);
        this.data = res.data;
      });
    },
    _submitPayToWechat() {
      let openId = JSON.parse(localStorage.getItem("userData")).openid;
      let params = {
        orderId: this.data.id,
        order_hash: this.data.hashId,
        openId: openId,
        payFrom: "h5"
      };
      submitPayToWechat(params)
        .then(res => {
          console.log(res);
          this.jsApiCall(res.data);
        })
        .catch(err => {
          Toast("错误");
        });
    },

    /**
     * 调起微信支付
     */
    jsApiCall(data) {
      // wx.chooseWXPay({
      //   timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
      //   nonceStr: data.nonce_str, // 支付签名随机串，不长于 32 位
      //   package: data.prepay_id, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
      //   signType: "MD5", // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      //   paySign: data.pay_sign, // 支付签名
      //   success: function(res) {
      //     // 支付成功后的回调函数
      //     console.log(res);
      //   }
      // });
      let that = this;
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: appId, //公众号ID
          timeStamp: data.timestamp, //时间戳，当前系统的时间，具体格式，请看API
          nonceStr: data.nonce_str, //随机串，具体格式请看API
          package: "prepay_id=" + data.prepay_id, //扩展包
          signType: "MD5", //微信签名方式:sha1
          paySign: data.pay_sign //微信签名
        },
        function(res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            // alert("成功");
            Toast("支付成功");

            that._getTravelOrderInfo();
          }
          // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          //因此微信团队建议，当收到ok返回时，向商户后台询问是否收到交易成功的通知，若收到通知，前端展示交易成功的界面；若此时未收到通知，商户后台主动调用查询订单接口，查询订单的当前状态，并反馈给前端展示相应的界面。
        }
      );
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

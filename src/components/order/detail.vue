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
    <div class="footer bg-white" v-if="data.status!=2">
      <div class="botton bg-green" @click="submit()">{{data.status==0?'去支付':'去点评'}}</div>
    </div>
  </div>
</template>

<script>
import InfoBar from "@/base/info-bar";
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
    InfoBar
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
    navigateToMiniProgram: function(payParam) {
      const url = "/pages/wxPay/wxPay?payParam=" + encodeURIComponent(payParam);
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
        // alert('小程序')
        //由后台协商好返回的数据格式，该代码仅供参考，不能实际使用
        const payParam = {
          appId: appId,
          nonceStr: "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
          package: "prepay_id=wx2017033010242291fcfe0db70013231072",
          signType: "MD5",
          timeStamp: "1490840662",
          paySign: "BB2B9BD3F2F8A1CB270C6ACE3D7BDB9"
        };
        // alert(payParam);
        this.navigateToMiniProgram(JSON.stringify(payParam));
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
      let openId = localStorage.getItem("openId");
      let params = {
        orderId: this.data.id,
        order_hashBODY: this.data.hashId,
        openId: openId
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
      wx.chooseWXPay({
        appId: appId,
        timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr: data.nonce_str, // 支付签名随机串，不长于 32 位
        package: data.prepay_id, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
        signType: "MD5", // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: data.pay_sign, // 支付签名
        success: function(res) {
          // 支付成功后的回调函数
          console.log(res);
        }
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

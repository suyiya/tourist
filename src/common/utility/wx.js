import { Toast } from 'mint-ui';
import ajax from '../../middleware/ajax';
import wx from 'weixin-js-sdk';
import {appId} from '@/common/utility/constant'
/* WeixinJSBridge 封装
    微信 JS-SDK 调用准备
    1、获取签名
    2、注入使用JS-API
   */
class WeChatJSBridge {

  // 获取微信签名
  getWeChatSignature(isBeta, isDebug) {
    // 是否开启调试模式 true：开启 false：未开启

    const url = "/ec/user/sign/getSignature"
    const data = Object.assign({})
    ajax(url, data, 'post').then(res => {
      if (res.errcode != '0') {
        Toast.info(res.errmsg);
        return Promise.reject();
      }
      this.registerJSAPI(res.data, isBeta, isDebug);
      return Promise.resolve();
    });
  }

  // 注入使用JS-API
  registerJSAPI(config, isBeta = false, isDebug = false) {

    wx.config({
      beta: isBeta || false,//  对于没有公开的接口，设置beta 为true
      debug: isDebug || false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: appId, // 必填，公众号的唯一标识
      timestamp: config.timestamp, // 必填，生成签名的时间戳
      nonceStr: config.nonceStr, // 必填，生成签名的随机串
      signature: config.signature, // 必填，签名，见附录1
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard',
        'openAddress',
        "chooseInvoiceTitle"
      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
  }
}

export default WeChatJSBridge;
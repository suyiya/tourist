/*
 * 微信环境检测
 * AlanKong 2019-01-30
 */
let isWeiXin = () => {
  var ua = window.navigator.userAgent.toLowerCase();
  /* 微信且是移动端 */
  if (ua.match(/MicroMessenger/i) == 'micromessenger' && ua.match(/AppleWebKit.*Mobile.*/i)) {
    isWeiXin = () => {
      return true;
    }
    return true;
  } else {
    isWeiXin = () => {
      return false;
    }
    return false;
  }
}

export default isWeiXin;
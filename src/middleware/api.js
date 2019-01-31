import { fetchTimeout } from '@/common/utility';

export const CALL_API = 'Call API';

// let time=0

// 生成异步action的type数组，0:请求， 1:成功, 2:失败
export const generateTypes = function (key) {
  return [`${key}_REQUEST`, `${key}_SUCCESS`, `${key}_FAILURE`]
}

export const SUCCESS = 1;
export const FAILURE = 2;
export const REQUEST = 0;

function checkStatus(response) {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject({
    errcode: response.status,
    errmsg: response.statusText
  })
}

function responseHandle(json) {
  if (json) {
    const errcode = json.errcode || json.code || (json.code&&json.code.errcode )
    if (errcode == 0) {
      return {...json, errcode};
    } else {
      return Promise.reject({
        errcode: errcode || -1,
        errmsg: json.errmsg || json.message || json,
        errinfo:json
      })
    }
  } else {
    return Promise.reject({
      errcode: -1,
      errmsg: '网络异常，请稍后重试'
    })
  }
}

function getStringify(params) {
  const arr = [];
  Object.keys(params).forEach(key => arr.push(key + '=' + params[key]));
  return arr.join('&');
}

// 0:公众号，1：小程序 12 sdk/wmsdk
export const getSource = () => {
  const user = window._global.user;
  if (user && (user.wmsdk || user.sdk)) {
    return 12;
  }
  return isWeiXin() ? 0 : 2;
}


export const callApi = ({
  endpoint,
  params,
  method = 'POST',
  options,
  level,
  timeout
}) => {
  //url 千万勿动
  let url = [window._global.prefixAPI,endpoint].join('');
  // let url = /^http/.test(endpoint) ? endpoint : [window._global.prefixAPI,endpoint].join('');
  //url 千万勿动
  const defaultOptions = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    cache: 'no-store',
    credentials: 'include'
  };
  //if(window._global.env === 'localhost' || window._global.env === 'development'){
    let _params = {pid: window._global.pid, storeId: window._global.storeId, wid: window._global.user.wid,refer:window._global.refer,source : getSource()};
    params =  Object.assign({},_params, params);
  //}

  if ((method === 'GET' || method === 'get') && params) {
    if (url.search(/\?/) === -1) {
      url += '?' + getStringify(params);
    } else {
      url += '&' + getStringify(params);
    }
  }

  let body = undefined;
  if ((method === 'POST' || method === 'post') && params) {
    body = JSON.stringify(params);
  }
  const opt = Object.assign({}, defaultOptions, options, { body });
  /*优先设置timeout, level等级为3时超时设置为4s, 否则10s*/
  const time = timeout ? timeout : (level === 3 ? 4000 : 10000);
  return fetchTimeout(url, opt, time)
    .then(checkStatus)
    .then(responseHandle)
    .catch(({errcode, errmsg, errinfo}) => {
      /*页面请求error上报*/
      if(window.rprm &&　window.rprm.pError){
        window.rprm.pError({
          message: '接口error',
          detail: {
            errcode:errcode || -1,
            errmsg: errmsg || '网络异常，请稍后重试',
            errinfo:errinfo||""
          }
        })
      }

      if (errcode == '1041') { // token过期
        window.location.replace(errinfo.data.callbackUrl);
        return Promise.reject({
          errcode:errcode,
          errmsg: '登录信息过期失效，即将重新加载页面',
          errinfo: {}
        })
      }

      return Promise.reject({
        errcode:errcode || -1,
        errmsg: errmsg || '网络异常，请稍后重试',
        errinfo:errinfo||""
      })
    });
}


export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    action.possibleShowToast=true;
    return next(action);
  }

  let { endpoint } = callAPI;
  const { types, params = null, showLoading, method, level = 2, timeout, options } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;

  const actionObj = {
    type: requestType
  };

  if (showLoading) {
    actionObj.showLoading = showLoading;
  }

  next(actionObj);

  return callApi({
    endpoint,
    params,
    method,
    options,
    level,
    timeout
  }).then((response) => {
    if (showLoading && showLoading != 2) {
      next(actionWith({
        response,
        type: successType,
        showLoading: 0,
        level
      }));
    } else {
      next(actionWith({
        response,
        type: successType,
        level
      }));
    }

    return {
      errcode: 0,
      errmsg: '',
      data: response.data
    }
  }, ({ errcode, errmsg ,errinfo}) => {
    function getLevel() {
      if (isShopClosed(errcode)) {
        return 1;
      }
      if (['1041'].indexOf(errcode) > -1) {
        return 3;
      }
      return level;
    }

    const actionObj = {
      type: failureType,
      errinfo:errinfo||"",
      errmsg: errmsg  || '网络异常，请稍后重试',
      errcode: errcode || -1,
      showLoading: 0,
      level: getLevel()
    }

    next(actionWith(actionObj));
    const errObj = {
      errmsg,
      errcode
    };
    if (isShopClosed(errcode)) {
      return Promise.reject(errObj);
    }
    return errObj;
  });
}

// 店铺打烊
export const isShopClosed = (errcode) => {
  return ['1061820100001', '1061820100002', '1061820100013'].indexOf(errcode) > -1;
}

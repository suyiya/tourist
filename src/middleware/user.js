import ajax from './ajax'

/**
 * 微信登陆
 * @param {*} params 
 */
export function loginWechat(params) {
    const url = '/account/loginWechat'

    const data = Object.assign({}, params)
    return ajax(url, data, 'post')
}
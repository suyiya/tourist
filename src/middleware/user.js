import ajax from './ajax'

/**
 * 获取用户信息
 * @param {*} params 
 */
export function getUserData(params) {
    const url = '/account/getAccessTokenFromMpWeb'

    // const data = Object.assign({}, params)
    return ajax(`${url}?code=${params.code}`, params, 'post')
}
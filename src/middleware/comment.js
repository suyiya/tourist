import jsonp from './jsonp'
import { commonParams, options } from './config'

/**
 * 获取评论列表
 * @param {*} params 
 */
export function getTravelProductComments(params) {
    const url = '/travel/getTravelProductComments'

    const data = Object.assign({}, commonParams, params)
    return jsonp(url, data, options)
}

/**
 * 对订单进行评价
 * @param {*} params 
 */
export function commentTravel(params) {
    const url = "/travel/order/commentTravel"
    const data = Object.assign({}, commonParams, params)
    return jsonp(url, data, options)
}
import jsonp from './jsonp'
import { commonParams, options } from './config'

/**
 * 提交旅游产品订单
 * @param {*} params 
 */
export function submitOrder(params) {
    const url = '/travel/order/submitOrder'

    const data = Object.assign({}, commonParams, params)
    return jsonp(url, data, options)
}

/**
 * 取当前用户旅游产品订单列表
 * @param {*} params 
 */
export function getOrderList(params) {
    const url = "/travel/order/getOrderList"
    const data = Object.assign({}, commonParams, params)
    return jsonp(url, data, options)
}

/**
 * 获取订单信息
 * @param {*} params 
 */
export function getTravelOrderInfo(params) {
    const url = "/travel/order/getTravelOrderInfo/{orderId}"
    const data = Object.assign({}, commonParams, params)
    return jsonp(url, data, options)
}
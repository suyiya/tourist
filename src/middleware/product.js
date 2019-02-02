import jsonp from './jsonp'
import { commonParams, options } from './config'

/**
 * 旅游产品列表
 * @param {*} params 
 */
export function getTravelProductList(params) {
    const url = '/travel/getTravelProductList'

    const data = Object.assign({}, commonParams, params)
    return jsonp(url, data, options)
}

/**
 * 旅游产品详情
 * @param {*} params 
 */
export function getTravelProductInfo(params) {
    const url = "/travel/getTravelProductInfo"
    const data = Object.assign({}, commonParams, params)
    return jsonp(url, data, options)
}

/**
 * 具体旅游产品的价格列表
 * @param {*} params 
 */
export function getTravelProductAllPrice(params) {
    const url = "/travel/getTravelProductAllPrice"
    const data = Object.assign({}, commonParams, params)
    return jsonp(url, data, options)
}
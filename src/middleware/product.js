import ajax from './ajax'

/**
 * 旅游产品列表
 * @param {*} params 
 */
export function getTravelProductList(params) {
    const url = '/travel/getTravelProductList'

    const data = Object.assign({}, params)
    return ajax(url, data)
}

/**
 * 旅游产品详情
 * @param {*} params 
 */
export function getTravelProductInfo(params) {
    const url = "/travel/getTravelProductInfo"
    const data = Object.assign({}, params)
    return ajax(url, data)
}

/**
 * 具体旅游产品的价格列表
 * @param {*} params 
 */
export function getTravelProductAllPrice(params) {
    const url = "/travel/getTravelProductAllPrice"
    const data = Object.assign({}, params)
    return ajax(url, data)
}

/**
 * 海外游
 * @param {*} params 
 */
export function getTravelProductListNotCn(params) {
    const url = "/travel/getTravelProductListNotCn"
    const data = Object.assign({}, params)
    return ajax(url, data)
}
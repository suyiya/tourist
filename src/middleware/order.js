import ajax from './ajax'

/**
 * 提交旅游产品订单
 * @param {*} params 
 */
export function submitOrder(params) {
    const url = '/travel/order/submitOrder'

    const data = Object.assign({}, params)
    return ajax(url, data, 'post')
}

/**
 * 取当前用户旅游产品订单列表
 * @param {*} params 
 */
export function getOrderList(params) {
    const url = "/travel/order/getOrderList"
    const data = Object.assign({}, params)
    return ajax(url, data)
}

/**
 * 获取订单信息
 * @param {*} params 
 */
export function getTravelOrderInfo(params) {
    const url = `/travel/order/getTravelOrderInfo/${params.orderId}`
    // const data = Object.assign({}, params)
    return ajax(url)
}
import ajax from './ajax'

/**
 * 获取评论列表
 * @param {*} params 
 */
export function getTravelProductComments(params) {
    const url = '/travel/getTravelProductComments'

    const data = Object.assign({}, params)
    return ajax(url, data)
}

/**
 * 对订单进行评价
 * @param {*} params 
 */
export function commentTravel(params) {
    const url = "/travel/order/commentTravel"
    const data = Object.assign({}, params)
    return ajax(url, data, 'post')
}
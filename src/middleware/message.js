import ajax from './ajax'

/**
 * 取当前用户的通知消息 
 * @param {*} params 
 * type： 1系统消息，2订单消息，3活动消息 （不传取所有类型） 
 * lastMsgId：本地最大的消息ID，第一次可以不传，不传默认从头全给 （不传，从头给） 
 * relate_with 1 与球局订单关联 2 与球局产品关联
 */
export function getMessage(params) {
    const url = '/msg/getTravelMessage'

    const data = Object.assign({}, params)
    return ajax(url, data)
}
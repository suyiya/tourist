const host = 'https://47.97.198.242';
export default function ajax(url, data, type) {
  return new Promise((resolve, reject) => {
    $.ajax({
      //  请求方式 默认是get
      type: type || 'get',
      //  地址
      url: host + url,
      //  对于get请求，这个没必要去设置，因为最后都是queryString的形式进行发送
      contentType: 'application/json', //  默认是 application/x-www-form-urlencoded
      data: type === 'post' ? JSON.stringify(data) : data,
      //  允许携带cookie信息-这个需要和后台协商，看是否需要 （可选）
      //  注意： 服务器端 Access-Control-Allow-Credentials = true 时，参数Access-Control-Allow-Origin 的值不能为 '*' 。
      xhrFields: {
        withCredentials: true
      },
      //  假设是跨域请求
      crossDomain: true,
      dataType: 'json', //默认是json
      headers: {
        Authorization: 'fa7eb92a06223f9078ca746935c9222572e0f3e1'
      },
      success: function (res) {
        //  res返回的code不为 0 的 时候，说明你的请求有问题，这里和我们的主题没太大关系
        if (res.code == 200) {
          resolve(res)
        } else {
          reject(res)
        }
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}

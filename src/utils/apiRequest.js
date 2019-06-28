// apicloud提供的ajax请求，能够跨域，缺点是只能在真机上使用

const apiRequest = ({ url, method, data }) => {
  return new Promise((resolve, reject) => {
    window.api.ajax({
      url: url,
      method: method,
      data: {
        body: data
      }
    }, function(ret, err) {
      if (ret) {
        resolve(ret)
      } else {
        reject(err)
      }
    })
  })
}

export default apiRequest

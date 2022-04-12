

import config from '../config/index'
import axios, { AxiosResponse, AxiosRequestConfig } from '../plugins/wx-axios/index'
import { promisify } from '../plugins/wx-promise/index';

// 创建axios实例
const instance = axios.create({
  baseURL: config.basePathUrl,
  timeout: 60000
})

// axios实例添加request阻流器
instance.interceptors.request.use((config) => {
  if (wx.getStorageSync('token')) {
    config.headers.Authorization = wx.getStorageSync('token')
  }
  return config
})

// axios实例添加response阻流器
instance.interceptors.response.use((res) => {
  return res
}, (err: Model.IResponse<Model.IError>) => {
  wx.hideLoading()
  if (err.status === 400 && err.data.code === '401') {
    console.log('err', err)
    return refreshToken(err.config)
  }
  if (err.status >= 500 && err.status < 600) {
    console.log('请后端检查服务器')
    wx.showToast({
      icon: 'none',
      title: "网络繁忙,请稍后再试",
      duration: 5000
    })
  }
  if (err.status >= 400 && err.status < 500) {
    console.log('用户网络问题、服务器动荡问题')
    if (config.errCodeList.includes(err.data.code)) {
      return Promise.resolve(err)
    }
    wx.showModal({
      content: err.data.message,
      showCancel: false
    })
  }
  return Promise.reject(err)
})

/** 刷新Token, 默认只刷新一次 */
function refreshToken(params: AxiosRequestConfig) {
  return promisify(wx.login)()
    .then((res: WechatMiniprogram.LoginSuccessCallbackResult) => promisify(wx.request)({
      url: config.loginUrl + res.code
    }))
    .then((res: any) => {
      wx.setStorageSync('token', res.data.jwtString)
      return refreshRequest(params)
    }, (err: any) => {
      return Promise.reject(err)
    })
}

/** 重新发起请求 */
function refreshRequest(config: AxiosRequestConfig) {
  return promisify(wx.request)({
    url: config.url,
    header: Object.assign({}, config.headers, {
      'Authorization': wx.getStorageSync('token')
    }),
    data: config.data,
    method: config.method,
    timeout: config.timeout
  }).then((res: any) => {
    const response: AxiosResponse = {
      data: res.data,
      status: res.statusCode,
      statusText: res.errMsg,
      headers: res.header,
      config: config,
      cookies: res.cookies
    }
    return response
  }, (err: any) => {
    return Promise.reject(err)
  })
}


export default instance 

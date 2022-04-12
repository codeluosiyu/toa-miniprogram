
/// <reference path="../../../../typings/index.d.ts" />

import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from "../types/index";

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data, url, method = 'GET', headers, responseType, dataType, timeout, cancelToken, filePath, name = 'file', formData } = config
    Object.keys(headers).forEach(name => {
      if (!data && name.toLowerCase() === 'content-type') {
        delete headers[name]
      }
    })
    let task = Object.create(null)
    if (method === 'UPLOAD') {
      task = wx.uploadFile({
        url: url as string,
        filePath: filePath as string,
        name,
        formData,
        header: headers,
        timeout,
        success(res: WechatMiniprogram.UploadFileSuccessCallbackResult) {
          const response: AxiosResponse = {
            data: res.data,
            status: res.statusCode,
            statusText: res.errMsg,
            headers: res.header,
            config: Object.assign({}, { method }, config),
            cookies: res.cookies
          }
          handleResponse(response)
        },
        fail(err: any) {
          reject({
            data: {
              code: -1,
              message: "网络异常，请稍后重试"
            },
            status: -1,
            statusText: err.errMsg,
            config: Object.assign({}, { method }, config)
          })
        }
      })
    } else {
      type miniMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
      task = wx.request({
        url: url as string,
        method: method as miniMethod,
        data: data,
        header: headers,
        responseType,
        dataType,
        timeout,
        success(res: WechatMiniprogram.RequestSuccessCallbackResult) {
          const response: AxiosResponse = {
            data: res.data,
            status: res.statusCode,
            statusText: res.errMsg,
            headers: res.header,
            config: Object.assign({}, { method }, config),
            cookies: res.cookies
          }
          handleResponse(response)
        },
        fail(err: any) {
          reject({
            data: {
              code: -1,
              message: "网络异常，请稍后重试"
            },
            status: -1,
            statusText: err.errMsg,
            config: Object.assign({}, { method }, config)
          })
        }
      })
    }
    processCancel()
    function processCancel(): void {
      if (cancelToken) {
        cancelToken.promise
          .then(reason => {
            task.abort()
            reject(reason)
          })
          .catch(() => { })
      }
    }
    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(response)
      }
    }
  })
}


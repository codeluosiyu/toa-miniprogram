import { isPlainObject, deepMerge } from './util'
import { Method } from '../types/index'

function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) { return }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
export function flattenHeaders(headers: any, method: Method): any {
  const methodLower = method.toLowerCase()
  if (!headers) {
    return headers
  }
  headers = deepMerge(headers.common || {}, headers[methodLower] || {}, headers)

  const methodsToDelete = ['delete', 'get', 'head', 'options', 'post', 'put', 'trace', 'connect', 'common']

  methodsToDelete.forEach(method => {
    delete headers[method]
  })

  return headers
}
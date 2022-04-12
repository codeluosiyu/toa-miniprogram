import { AxiosRequestConfig, AxiosResponse } from '../types/index'

export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  response?: AxiosResponse
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    response?: AxiosResponse
  ) {
    super(message)

    this.config = config
    this.code = code
    this.response = response
    this.isAxiosError = true
    /* 为了解决 TypeScript 继承一些内置对象的时候的坑 */
    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  response?: AxiosResponse
): AxiosError {
  return new AxiosError(message, config, code, response)
}
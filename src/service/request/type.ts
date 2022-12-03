import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 封装不同的拦截器
export interface JNRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requesetInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T // 用户传什么类型，就返回什么类型
  responseInterceptorCatch?: (error: any) => any // 错误用 any 类型问题不大
}

export interface JNRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: JNRequestInterceptors<T>
}

import axios from 'axios'

import type { AxiosInstance } from 'axios'
import type { JNRequestInterceptors, JNRequestConfig } from './type'

class JNRequest {
  instance: AxiosInstance
  interceptors?: JNRequestInterceptors // 用户可以自由选择

  constructor(config: JNRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.interceptors = config.interceptors

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器(个性化定制)
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requesetInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        return data
      },
      (err) => {
        return err
      }
    )
  }

  request<T>(config: JNRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 对 AxiosInstance 的封装
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 有了reject,为什么要用return
          reject(err)
          return err
        })
    })
  }

  get<T>(config: JNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: JNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: JNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: JNRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default JNRequest

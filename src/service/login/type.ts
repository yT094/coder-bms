export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  // 获取登录数据时, data为object; 获取菜单时, data为数组对象...
  data: T
}

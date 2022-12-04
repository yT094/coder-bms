import jnRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/'
}

export function accountLoginRequest(account: IAccount) {
  return jnRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return jnRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

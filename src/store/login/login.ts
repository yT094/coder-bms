import { Module } from 'vuex'

import { accountLoginRequest } from '@/service/login/login'

import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/type'

import localCache from '@/utils/cache'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      // 保存token值到vuex和localStorage中
      commit('changeToken', token)
      localCache.setCache('token', token)
    }
  }
}

export default loginModule

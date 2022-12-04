import { Module } from 'vuex'

import { accountLoginRequest } from '@/service/login/login'

import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      console.log('loginResult', id, token)
    }
  }
}

export default loginModule

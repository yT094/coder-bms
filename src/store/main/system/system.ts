import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'

import { getPageListData } from '../../../service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userList
            break
          default:
            break
        }
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1.获取 pageUrl
      const pageName = payload.pageName
      let pageUrl = ''
      switch (pageName) {
        case 'users':
          pageUrl = '/users/list'
          break
        default:
          break
      }

      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 3.将数据存到 state 中
      const { list, totalCount } = pageResult.data
      switch (pageName) {
        case 'users':
          commit('changeUserList', list)
          commit('changeUserCount', totalCount)
          break
        default:
          break
      }
    }
  }
}

export default systemModule

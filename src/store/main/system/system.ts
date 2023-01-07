import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ElMessage } from 'element-plus'
import { ISystemState } from './types'

import { getPageListData, createPageData } from '@/service/main/system/system'

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
    },

    async createPageDataAction({ dispatch }, payload: any) {
      // 1.创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      const pageResult = await createPageData(pageUrl, newData)
      if (pageResult.code !== 0) {
        ElMessage({
          showClose: true,
          message: '新建用户失败！',
          type: 'error'
        })
      } else {
        ElMessage({
          showClose: true,
          message: '新建用户成功！',
          type: 'success'
        })
        // 2.请求最新的数据
        dispatch('getPageListAction', {
          pageName,
          queryInfo: {
            offset: 0,
            size: 10
          }
        })
      }
    }
  }
}

export default systemModule

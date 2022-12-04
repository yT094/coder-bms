import { createStore } from 'vuex'

import { IRootState } from './types'
import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderycs',
      age: 25
    }
  },
  mutations: {},
  getters: {},
  modules: {
    login
  }
})

export default store

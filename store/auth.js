export const state = () => ({
  token: 123
})

export const mutations = {
  setToken(state, token){
    state.token = token
  },
  clearToken(state){
    state.token = null
  }
}

export const actions = {

  async login({commit, dispatch}, payloads){
    try{
      const token = await new Promise((resolve, reject) => {
        setTimeout(()=>resolve('mock-token'), 2000)
      })
      dispatch('setToken', token)
    }catch(e){
      commit('setError', e, {root:true})
      throw e
    }
  },

  async createUser({commit, dispatch}, payloads){
    try {

    } catch (error) {

    }
  },

  setToken({commit}, token){
    commit('setToken', token)
  },

  logout({commit}){
    commit('clearToken')
  }

}

export const getters = {
  isAuth: state => Boolean(state.token)
}

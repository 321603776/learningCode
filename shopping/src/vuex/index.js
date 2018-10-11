import Vue from 'vue'
import Vuex from 'vuex'
import data from './../data/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [],
    cartList: []
  },
  mutations: {
    setProductList (state, list) {
      state.productList = list
    }
  },
  actions: {
    getProductList (content) {
      setTimeout(() => {
        content.commit('setProductList', data)
      }, 500)
    }
  }
})

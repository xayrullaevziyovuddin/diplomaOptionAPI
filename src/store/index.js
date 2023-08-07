import axios from 'axios'
import {
  createStore
} from 'vuex'


export const store = createStore({

    state: {
       
        products: null,
       
     
    },

    mutations: {
        getProducts(state, payload) {
            state.products = payload
        },
       
    },

    actions: {
        async getUsers(context) {
            let response = await fetch('https://dummyjson.com/products?&limit=100')
            let result = await response.json()
      
            context.commit('getProducts', result.products)
        }
    },

    getters: {
       
    },
})
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
import axios from 'axios';

export default{
    namespaced: true,
    state:{
        message: ""
    },
    mutations:{
        MESSAGE(state, status){
            state.message = status;

        }
    },
    getters:{
        message(state){
            return state.message;
        }


    },

};
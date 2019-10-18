import Vue from 'vue';

import VueRouter from 'vue-router';

import routes from './config/routes.js';
import Vuex from 'vuex';
import baseStore from './config/stores/base';
Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter({
  routes
});
const store = new Vuex.Store({
  modules: {
    base: baseStore
  }
});

const app = new Vue({
  router: router,
  el: '#app'
});

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Collection from './views/Collection.vue';
import Scan from './views/Scan.vue';
import Profile from './views/Profile.vue';
import Home from './views/Home.vue';

const routes = [
  {
    path: '',
    component: App,
    children: [
      { path: '', component: Home },
      { path: 'scan', component: Scan },
      { path: 'profile', component: Profile },
      { path: 'collection', component: Collection }
    ]
  }
];
const router = new VueRouter({
  routes
});
Vue.use(VueRouter);
const app = new Vue({
  router: router,
  el: '#app'
});

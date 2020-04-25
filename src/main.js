import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.productionTip = false

import App from './App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Items from './views/Items.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/items', component: Items}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

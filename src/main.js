import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.productionTip = false

import App from './App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Items from './views/Items.vue'
import User from './views/User.vue'
import AddItem from './views/AddItem.vue'
import UpdateItem from './views/UpdateItem.vue'
import NotFound from './views/NotFound.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/items', name: 'items', component: Items},
    { path: '/items/addItem', component: AddItem},
    { path: '/items/:id', component: UpdateItem},
    { path: '/user', name: 'user', component: User},
    { path: '*', name: '404', component: NotFound }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

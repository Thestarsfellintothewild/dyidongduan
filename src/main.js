import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/moddle/flexible'
import '@/style/reset.css'
import { Button, Cell, CellGroup, Search, Icon, Tabbar, TabbarItem, PullRefresh, Form, Field, Lazyload } from 'vant'
import axios from 'axios'
import './mock/index'
import $ from 'jquery'
window.jQuery = $
window.$ = $
Vue.prototype.$axios = axios
Vue.use(Lazyload)
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(Form)
Vue.use(Field)
Vue.use(PullRefresh)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Search)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Button)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path === '/homede') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

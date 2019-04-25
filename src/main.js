// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import axios from 'axios'
import router from './router'
import axios from './provider/intercept'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

axios.create({
  timeout: 60000
});

// axios.defaults.baseURL = 'http://192.168.100.6'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//
// // 请求拦截
// axios.interceptors.request.use(config => {
//
//   // if (store.state.token) {
//   //   config.headers = {
//   //     "User-Token": store.state.token
//   //   }
//   // }
//   return config
// }, error => {
//   return Promise.reject(error)
// })
// axios.interceptors.response.use(
//   t => {
//     let e = t.data;
//     return  t
//   }, t => {
//     return Promise.reject(t)
//   }
// )

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

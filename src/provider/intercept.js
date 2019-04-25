import axios from 'axios'
// import store from '@/store'
import element from 'element-ui';
import router from "../router";


axios.create({
  // headers: {'Content-Type': 'application/json'},
  timeout: 60000
});
// axios.defaults.baseURL = 'http://192.168.100.6'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截
axios.interceptors.request.use(config => {

  // if (store.state.token) {
  //   config.headers = {
  //     "User-Token": store.state.token
  //   }
  // }
  return config
}, error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(
  t => {
    let e = t.data;
    return t
  }, t => {
    return Promise.reject(t)
  }
)

export default axios




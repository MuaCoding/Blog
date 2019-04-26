import axios from 'axios'
// import store from '@/store'
import element from 'element-ui';
import router from "../router";


axios.create({
  // headers: {'Content-Type': 'application/json'},
  baseURL: 'http://127.0.0.1:3000',
  timeout: 50000
});
// axios.defaults.baseURL = '/api'
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
  response => {
    return response
  }, error => {
    return Promise.reject(error)
  }
)

export default axios




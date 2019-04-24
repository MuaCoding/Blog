import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: "*",
    redirect: "/",
  }, {
    path: "/",
    name: "entry",
    redirect: "/index",
    meta: {
      title: "首页"
    },
    component: resolve => require(['@/pages/index/index'],resolve),
    children:[{
      path: "index",
      name: "index",
      meta: {
        title: "首页"
      },
      component: resolve => require(['@/pages/article/list'],resolve),
    },{
      path: "detail",
      name: "detail",
      meta: {
        title: "详情"
      },
      component: resolve => require(['@/pages/article/detail'],resolve),
    }]
  }]
})

export default router;

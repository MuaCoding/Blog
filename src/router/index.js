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
      path: "/index",
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


router.beforeEach((to, from, next) => {
  /**
   * 1.判断该路由是否需要登录权限
   * 2.判断登录信息是否过期
   */
  let flag;
  // if (store.state.token) {
  //   try {
  //     const expire = Number(store.state.exp), currTime = FormatMsec(new Date),
  //       h = new Date(currTime + expire);
  //     flag = h > new Date;
  //   } catch (t) {
  //     flag = !1
  //   }
  // }
  // try {
  //   const expire = Number(store.state.exp), currTime = FormatMsec(new Date),
  //     h = new Date(currTime + expire);
  //   flag = h > new Date;
  // } catch (t) {
  //   flag = !1
  // }

  //
  // if (!flag && to.path !== '/login' && "/logout" !== to.path && "/register" !== to.path) { // 判断该路由是否需要登录权限
  //   iView.Modal.error({
  //     title: "错误信息",
  //     content: "您的用户状态已失效，请前往登录页面重新登录",
  //     onOk: function () {
  //       router.push({
  //         path: "/login"
  //       });
  //     }
  //   });
  //   router.push({
  //     path: "/login"
  //   });
  //   -1 === to.path.indexOf(i) && -1 === to.path.indexOf(from.path) && this.$store.commit("CLEAR_LIST_STATUS");
  // }
  next();
});

router.afterEach(route => {
  window.scrollTo(0, 0);
})

export default router;

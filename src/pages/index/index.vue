<template>
  <div id="wrapper">
    <div id="bg"></div>
    <div id="overlay"></div>
    <div id="main">

      <!-- Header -->
      <header id="header">
        <h1>Xiao Ming Classmate</h1>
        <p>Independent Developer &nbsp;•&nbsp; Keep learning and upgrade your core values</p>
        <nav>
          <ul>
            <li @click="routerTo"><a class="iconfont article"><span class="label">Article</span></a></li>
            <li><a href="https://github.com/XiaoMingLi" class="iconfont github"><span class="label">GitHub</span></a></li>
            <li><a href="https://weibo.com/3174227040/profile?topnav=1&wvr=6" class="iconfont weibo"><span class="label">Weibo</span></a></li>
            <li><a href="https://juejin.im/user/579ebb5e5bbb500064e67a27/activities" class="iconfont xitu"><span class="label">Xitu</span></a></li>
          </ul>
        </nav>
      </header>

      <!-- Footer -->
      <footer id="footer">
        <span class="copyright">© Xiao Ming Designed by www</span>
      </footer>
    </div>
  </div>
</template>

<script>

  export default {
    name: "index",
    data() {
      return {
      }
    },
    components: {
    },
    mounted: function() {
      // this.queryArticle()
      // this.queryCategory();
    },
    methods: {
      routerTo: function() {
        this.$router.push({
          name: 'list'
        })
      },
      logout: function() {
        this.$router.replace({
          name: "logout"
        })
      }
    },
  }
</script>


<style scoped lang="scss" rel="stylesheet/scss">
  @import 'common/scss/main.scss';

</style>

<template>
  <div id="wrapper">
    <div id="bg"></div>
    <div id="overlay"></div>
    <div id="main">

      <!-- Header -->
      <header id="header">
        <h1>Xiao Ming classmate</h1>
        <p>Independent Developer &nbsp;•&nbsp; Keep learning and upgrade your core values.</p>
        <nav>
          <ul>
            <li><a href="https://www.linkedin.com/in/imshuhao/" class="iconfont article"><span class="label">Article</span></a></li>
            <li><a href="https://github.com/XiaoMingLi" class="iconfont github"><span class="label">GitHub</span></a></li>
            <li><a href="https://weibo.com/3174227040/profile?topnav=1&wvr=6" class="iconfont weibo"><span class="label">Weibo</span></a></li>
            <li><a href="https://juejin.im/user/579ebb5e5bbb500064e67a27/activities" class="iconfont xitu"><span class="label">Xitu</span></a></li>
          </ul>
        </nav>
      </header>

      <!-- Footer -->
      <footer id="footer">
        <span class="copyright">© Xiao Ming Li. Designed by www.</span>
      </footer>

    </div>
  </div>
</template>

<script>
  import HeaderBar from 'components/common/HeaderBar';
  import FooterBar from 'components/common/FooterBar';

  export default {
    name: "index",
    data() {
      return {
        total: 1,
        page: 1,
        size: 10,
        list: [],
      }
    },
    components: {
      HeaderBar,
      FooterBar
    },
    mounted: function() {
      this.queryArticle()
      this.queryCategory();
    },
    methods: {
      queryArticle: function() {
        const t = this
        const formData = {
          pageNum: this.page,
          pageSize: this.size,
          state: 1,
          keyword:'',
          likes: false,
          tag_id: '',
          category_id: '',
        }
        this.$http.get("/api/getArticleList",{
          params: formData
        }).then(function(e) {
          let s = e.data.data;
          console.log(s)
          t.list = s.list,t.total = s.count;
          console.log(t.list)
        }).catch(function(e) {
          t.list = [],t.total = 0,t.page = 1;
        })
      },
      queryCategory: function() {

      },
      logout: function() {
        this.$router.replace({
          name: "logout"
        })
      }
    },
  }
</script>


<style lang="scss" rel="stylesheet/scss">
  @import 'common/scss/main.scss';
  .main {
    height: 100%;
    left: 0;
    position: fixed;
    text-align: center;
    top: 0;
    width: 100%;
  }

</style>

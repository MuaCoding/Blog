<template>
  <el-container class="main">
    <header-bar></header-bar>
    <el-main>
      <div class="list-container">
        <ul class="note-list">
          <li class="have-img" v-for="item in list">
            <a href="" class="wrap-img">
              <img
                src="https://upload-images.jianshu.io/upload_images/10696270-43d222c1f8051c63?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                alt="">
            </a>
            <div class="content">
              <a target="_blank" class="title">{{item.title}}</a>
              <p class="abstract">
                {{item.desc}}
              </p>
              <div class="meta">
                <a class="nickname" target="_blank" href="">韩老师说财商</a>
                <a target="_blank" href="">
                  <i class="iconfont ic-list-comments"></i> 评论 3
                </a>
                <span><i class="iconfont ic-list-like"></i> 点赞 81</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="load-more">
        <el-button style="width: 100%" type="primary" round>阅读更多</el-button>
      </div>
    </el-main>
  </el-container>
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
  .el-footer {
    background-color: #ffffff;
    text-align: center;
    line-height: 64px;
  }

  .main {
    .el-main {
      margin-top: 60px;
      margin-right: auto;
      margin-left: auto;
      padding-left: 15px;
      padding-right: 15px;
      background-color: #fff;
      min-height: 780px;
      max-width: 700px;

      .have-img {
        .content {
          padding-right: 165px;
        }

        .wrap-img {
          width: 150px;
        }
      }

    }
    .note-list {

      .title {
        &:visited {
          color: #969696;
        }

        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
      }

      .abstract {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
      }

      .meta {
        padding-right: 0 !important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;

        a, span {
          margin-right: 10px;
          color: #b4b4b4;
        }
        a{
          transition: .1s ease-in;
        }

      }

      li {
        &.have-img {
          min-height: 140px;

        }
      }

      .have-img {
        > div {
          padding-right: 140px;
        }

        .wrap-img {
          position: absolute;
          top: 50%;
          margin-top: -60px;
          right: 0;
          width: 125px;
          height: 100px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            border: 1px solid #f0f0f0;
          }
        }
      }

      li {
        position: relative;
        width: 100%;
        margin: 0 0 15px;
        padding: 15px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
      }
    }

  }


  .load-more{
    padding: 0 60px;
    text-align: center;
  }
  body {
    padding-top: 76px;
  }
</style>

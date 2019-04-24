<template>
  <header class="el-header">
    <div class="site-logo">
      <span class="inner-text">博客</span>
    </div>
    <div class="user-info">
      <div class="user-avatar">
        <img ref="avatar" src="" alt="">
      </div>
      <span :title="'用户类型：'"
            class="user-name">admin</span>
      <!--<span class="user-role">超级管理员</span>-->
      <a class="exit-link">退出</a>
    </div>
  </header>
</template>

<script>
  export default {
    name: "HeaderBar"
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  .el-header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all .2s;
    background-color: #ffffff;
    padding: 0 50px;

    height: 64px;
    line-height: 64px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
    z-index: 100;

    > .site-logo {
      float: left;
      height: 64px;

      > .inner-text {
        display: inline-block;
        margin: 20px 0 20px 10px;
        padding: 0 5px;
        background-color: #409EFF;
        line-height: 24px;
        height: 24px;
        color: #ffffff;
        font-size: 15px;
        border-radius: 2px;
        vertical-align: middle;
        cursor: pointer;
      }
    }

    > .user-info {
      float: right;
      height: 64px;
      line-height: 64px;

      > .user-avatar {
        display: inline-block;
        height: 30px;
        width: 30px;
        line-height: 25px;
        border-radius: 15px;
        overflow: hidden;
        vertical-align: middle;
        background: url('../../assets/user.png') 50% no-repeat, #409EFF;
        cursor: pointer;


        img {
          height: 100%;
          width: 100%;

          &.load-fail {
            display: none;
          }
        }
      }

      > .user-name {
        padding-left: 5px;
        vertical-align: middle;
      }

      > .user-role {
        padding: 3px 5px;
        margin-left: 5px;
        vertical-align: middle;
        background-color: #19be6b;
        color: #fff;
        border-radius: 2px;
      }

      > .exit-link {
        padding-left: 15px;
        margin-left: 15px;
        border-left: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
        vertical-align: middle;

        &:hover {
          color: #2d8cf0;
        }
      }
    }
  }

</style>

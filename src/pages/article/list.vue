<template>
  <div class="list-container">
    <ul class="note-list">
      <li class="have-img" v-for="item in [1,2,3,4,5,6]">
        <a href="" class="wrap-img">
          <img
            src="https://upload-images.jianshu.io/upload_images/10696270-43d222c1f8051c63?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
            alt="">
        </a>
        <div class="content">
          <a target="_blank" class="title">今日头条怎么发文章赚钱，做自媒体可以不用上班吗</a>
          <p class="abstract">
            之前手把手教了大家申请个人微信公众号的教程，有许多网友跟我留言说，还有没有申请其他自媒体平台的教程。 “今日头条”、“百家号”、“大鱼号”、“一...
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
</template>

<script>
  export default {
    name: "list"
  }
</script>

<style scoped>

</style>

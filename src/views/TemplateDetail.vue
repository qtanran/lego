<script setup></script>

<template>
  <div class="work-detail-container">
    <el-row justify="center">
      <el-col :span="8" class="cover-img">
        <img src="https://static.imooc-lego.com/upload-files/screenshot-889755.png" alt="" />
      </el-col>
      <el-col :span="8">
        <h2>前端架构师直播海报</h2>
        <p>如何突破前端成长瓶颈？</p>
        <div class="author">
          <el-avatar>V</el-avatar>
          该模版由 <b>Viking</b> 创作
        </div>
        <div class="bar-code-area">
          <span>扫一扫，手机预览</span>
          <div ref="container"></div>
        </div>
        <div class="use-button">
          <router-link to="/editor">
            <el-button type="primary" size="large"> 使用模版 </el-button>
          </router-link>
          <el-button size="large"> 下载图片海报 </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.work-detail-container {
  margin-top: 50px;

  .cover-img {
    margin-right: 30px;
  }
  .cover-img img {
    width: 100%;
  }
  .use-button {
    margin: 30px 0;
  }
  .el-avatar {
    margin-right: 10px;
  }
  .bar-code-area {
    margin: 20px 0;
  }
}
</style>

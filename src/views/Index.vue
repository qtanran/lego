<script setup></script>

<template>
  <el-container>
    <el-header>
      <div class="page-title">
        <router-link to="/"> 慕课乐高 </router-link>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>© 慕课网（imooc.com）版权所有 | 津ICP备20000929号-2</el-footer>
  </el-container>
</template>

<style scoped lang="scss">
.el-header {
  background: #000;

  .page-title {
    color: #fff;
  }
}

.el-footer {
  background: #000;
  color: #fff;
}
</style>

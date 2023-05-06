<script setup>
import UserProfile from '@/components/UserProfile.vue'
</script>

<template>
  <el-container>
    <el-header>
      <div class="page-title">
        <router-link to="/"> 慕课乐高 </router-link>
      </div>
      <user-profile />
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-title {
    color: #fff;
  }
}

.el-footer {
  background: #000;
  color: #fff;
}
</style>

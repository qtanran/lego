<script setup>
import { useUserStore } from '@/store/user.js'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const userStore = useUserStore()

/**
 * 登录
 */
const login = () => {
  userStore.login()
  ElMessage.success('登录成功')
}

/**
 * 退出登录
 */
const logout = () => {
  userStore.logout()
  ElMessage.success('退出登录成功，2秒后跳转到首页')
  setTimeout(() => {
    router.push('/')
  })
}
</script>

<template>
  <el-button
    type="primary"
    v-if="!userStore.user.isLogin"
    class="user-profile-component"
    @click="login"
    >登录</el-button
  >
  <div v-else>
    <el-dropdown split-button type="primary" class="user-profile-component">
      <router-link to="/setting">{{ userStore.user.userName }}</router-link>
      <template #dropdown>
        <el-dropdown-menu class="user-profile-dropdown">
          <el-dropdown-item @click="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="scss"></style>

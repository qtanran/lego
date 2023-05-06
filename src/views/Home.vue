<script setup>
import TemplateList from '../components/TemplateList.vue'
import { useStore } from '@/store'

const store = useStore()
</script>

<template>
  <div class="content-container">
    <template-list :list="store.templates" />
  </div>
</template>

<style scoped lang="scss">
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>

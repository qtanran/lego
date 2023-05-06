<script setup>
import TemplateList from '../components/TemplateList.vue'
import { useTemplatesStore } from '@/store/templates.js'

const templatesStore = useTemplatesStore()
</script>

<template>
  <div class="content-container">
    <template-list :list="templatesStore.templates" />
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

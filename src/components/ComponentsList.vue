<script setup>
import { ElMessage } from 'element-plus'
import { v4 as uuidV4 } from 'uuid'
import LText from '@/components/LText.vue'
import { imageDefaultProps } from '@/defaultProps.js'

defineProps({
  list: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['on-item-click'])
const onItemClick = props => {
  emits('on-item-click', {
    name: 'l-text',
    id: uuidV4(),
    props
  })
}
const onImageUploaded = res => {
  ElMessage.success('上传成功')
  emits('on-item-click', {
    name: 'l-image',
    id: uuidV4(),
    props: {
      ...imageDefaultProps,
      src: res.data.urls[0]
    }
  })
}
</script>

<template>
  <div class="create-component-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="component-item"
      @click="onItemClick(item)"
    >
      <l-text v-bind="item"></l-text>
    </div>
    <el-upload action="http://localhost:7001/api/utils/upload-img" :on-success="onImageUploaded">
      <el-button type="primary">上传图片</el-button>
    </el-upload>
  </div>
</template>

<style scoped lang="scss">
.component-item {
  width: 100px;
  margin: 0 auto 15px;
}
</style>

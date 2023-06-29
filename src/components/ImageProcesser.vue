<script setup>
import { ElMessage } from 'element-plus'
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  ratio: {
    type: Number
  },
  showDelete: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['change', 'uploaded'])
const backgroundUrl = computed(() => `url(${props.modelValue})`)

const handleFileUploaded = res => {
  ElMessage.success('上传成功')
  emits('change', res.data.urls[0])
  emits('uploaded', res)
}

const handleDelete = () => {
  emits('change', '')
}
</script>

<template>
  <div class="image-processer">
    <div
      class="image-preview"
      :style="{ backgroundImage: backgroundUrl }"
      :class="{ 'extraHeight': showDelete }"
    />
    <div class="image-process">
      <el-upload
        action="http://localhost:7001/api/utils/upload-img"
        :on-success="handleFileUploaded"
      >
        <el-button type="primary">上传图片</el-button>
      </el-upload>
      <el-button v-if="showDelete" type="danger" @click="handleDelete">删除图片</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-processer {
  display: flex;
  justify-content: space-between;

  .image-preview {
    width: 150px;
    height: 84px;
    border: 1px dashed #e6ebed;
    background: no-repeat 50% / contain;

    &.extraHeight {
      height: 110px;
    }
  }
  .image-cropper img {
    display: block;
    max-width: 100%;
  }
  .image-process {
    padding: 5px 0;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>

<script setup>
import { ElMessage } from 'element-plus'
import { computed, ref, watch, nextTick } from 'vue'
import Cropper from 'cropperjs'

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
const showModal = ref(false)
const cropperImg = ref(null)
let cropper = null
let cropData = null
watch(showModal, async newValue => {
  if (newValue) {
    await nextTick()
    cropperImg.value &&
      new Cropper(cropperImg.value, {
        crop(event) {
          const { x, y, width, height } = event.detail
          cropData = {
            x: Math.floor(x),
            y: Math.floor(y),
            width: Math.floor(width),
            height: Math.floor(height)
          }
        }
      })
  } else {
    cropper?.destroy()
  }
})

/**
 * 图片上传成功
 * @param res
 */
const handleFileUploaded = res => {
  ElMessage.success('上传成功')
  emits('change', res.data.urls[0])
  emits('uploaded', res)
}

/**
 * 删除图片按钮的点击
 */
const handleDelete = () => {
  emits('change', '')
}

/**
 * 处理图片的裁剪
 */
const baseImageUrl = computed(() => props.modelValue.split('?')[0])
const handleImgCut = () => {
  if (cropData) {
    const { x, y, width, height } = cropData
    const cropperURL =
      baseImageUrl.value + `?x-oss-process=image/crop,x_${x},y_${y},w_${width},h_${height}`
    emits('change', cropperURL)
  }
  showModal.value = false
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
      <el-button @click="showModal = true">裁剪图片</el-button>
      <el-button v-if="showDelete" type="danger" @click="handleDelete">删除图片</el-button>
    </div>
  </div>
  <el-dialog v-model="showModal" title="裁剪图片" width="50%">
    <div class="image-cropper">
      <img :src="baseImageUrl" id="processed-image" ref="cropperImg" src="" alt="" />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showModal = false">取消</el-button>
        <el-button type="primary" @click="handleImgCut"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
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
  .image-cropper img {
    display: block;
    max-width: 100%;
  }
}
</style>

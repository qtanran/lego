<script setup>
import { reduce } from 'lodash-es'
import { computed } from 'vue'
import { mapPropsToForms } from '@/propsMap.js'
import { ElInput } from 'element-plus'
import 'element-plus/theme-chalk/el-input.css'

const componentObj = {
  'el-input': ElInput
}

const props = defineProps({
  props: {
    type: Object,
    required: true
  }
})

const finalProps = computed(() =>
  reduce(
    props.props,
    (result, value, key) => {
      const item = mapPropsToForms[key]
      if (item) {
        item.value = value
        result[key] = item
      }
      return result
    },
    {}
  )
)

console.log(finalProps)
</script>

<template>
  <div class="props-table">
    <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <component v-if="value" :is="componentObj[value.component]" :value="value.value" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

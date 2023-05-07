<script setup>
import { computed } from 'vue'
import { pick } from 'lodash-es'
import { textProps, textStylePropNames } from '@/defaultProps.js'

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  ...textProps
})
const styleProps = computed(() => pick(props, textStylePropNames))
</script>

<template>
  <component :is="tag" :style="styleProps" class="l-text-component">{{ props.text }}</component>
</template>

<style scoped lang="scss">
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>

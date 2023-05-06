<script setup>
import { pick } from 'lodash-es'
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String
  },
  fontSize: {
    type: String
  },
  tag: {
    type: String,
    default: 'div'
  }
})
const styleProps = computed(() => pick(props, ['fontSize']))
</script>

<template>
  <component :is="tag" :style="styleProps" class="l-text-component">{{ text }}</component>
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
}
</style>

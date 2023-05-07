<script setup>
import useComponentCommon from '@/hooks/useComponentCommon.js'
import { transformToComponentProps, textDefaultProps, textStylePropNames } from '@/defaultProps.js'

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  ...transformToComponentProps(textDefaultProps)
})
const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames)
</script>

<template>
  <component :is="tag" :style="styleProps" @click="handleClick" class="l-text-component">{{
    props.text
  }}</component>
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

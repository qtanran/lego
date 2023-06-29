<script setup>
import useComponentCommon from '../hooks/useComponentCommon'
import { transformToComponentProps, imageDefaultProps, imageStylePropsNames } from '../defaultProps'

const props = defineProps({
  ...transformToComponentProps(imageDefaultProps)
})
const { styleProps, handleClick } = useComponentCommon(props, imageStylePropsNames)
</script>

<template>
  <img
    :style="styleProps"
    class="l-image-component"
    @click.prevent="handleClick"
    :src="props.src"
    alt=""
  />
</template>

<style scoped lang="scss"></style>

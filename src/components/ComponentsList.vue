<script setup>
import LText from '@/components/LText.vue'
defineProps({
  list: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['on-item-click'])
const onItemClick = data => {
  emits('on-item-click', data)
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
  </div>
</template>

<style scoped lang="scss">
.component-item {
  width: 100px;
  margin: 0 auto 15px;
}
</style>

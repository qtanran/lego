<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['set-active'])

const onItemClick = id => {
  emits('set-active', id)
}
</script>

<template>
  <div class="edit-wrapper" @click="onItemClick(id)" :class="{ active: active }">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.edit-wrapper {
  padding: 0;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;

  &:hover {
    border: 1px dashed #ccc;
  }

  &.active {
    border: 1px solid #1890ff;
    user-select: none;
    z-index: 1500;
  }
}
</style>

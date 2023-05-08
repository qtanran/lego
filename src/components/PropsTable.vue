<script setup>
import { reduce } from 'lodash-es'
import { computed } from 'vue'
import { mapPropsToForms } from '@/propsMap.js'

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
</script>

<template>
  <div class="props-table">
    <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <span class="label" v-if="value.text">{{ value.text }}</span>
      <div class="prop-component">
        <component :is="value.component" :value="value.value" v-bind="value.extraProps" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.prop-item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.label {
  width: 28%;
}
.prop-component {
  width: 70%;
}
</style>

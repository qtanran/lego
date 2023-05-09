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
        item.value = item.initalTransform ? item.initalTransform(value) : value
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
      <span class="label">{{ value.text }}</span>
      <div class="prop-component">
        <component :is="value.component" v-model="value.value" v-bind="value.extraProps">
          <template v-if="value.options">
            <component
              :is="value.subComponent"
              v-for="(option, k) in value.options"
              :key="k"
              :label="option.label"
              :value="option.value"
            >
            </component>
          </template>
        </component>
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

import { computed } from 'vue'
import { pick } from 'lodash-es'

export default (props, picks) => {
  const styleProps = computed(() => pick(props, picks))
  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }
  return {
    styleProps,
    handleClick
  }
}

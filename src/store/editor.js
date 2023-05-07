import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const testComponents = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '20px', color: 'red' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: '10px', fontWeight: 'bold' } },
  {
    id: uuidv4(),
    name: 'l-text',
    props: { text: 'hello3', fontSize: '15px', actionType: 'url', url: 'https://www.baidu.com' }
  }
]

export const useEditorStore = defineStore('editorStore', {
  state: () => ({
    components: testComponents,
    currentElement: ''
  }),
  getters: {
    getCurrentElement: state =>
      state.components.find(component => component.id === state.currentElement)
  },
  actions: {
    addComponent(props) {
      this.components.push({
        id: uuidv4(),
        name: 'l-text',
        props
      })
    },
    setActive(currentId) {
      this.currentElement = currentId
    }
  }
})

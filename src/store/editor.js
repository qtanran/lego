import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const testComponents = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello3' } }
]

export const useEditorStore = defineStore('editorStore', {
  state: () => ({
    components: testComponents,
    currentElement: ''
  })
})

import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const testComponents = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '20px' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: '10px' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello3', fontSize: '15px' } }
]

export const useEditorStore = defineStore('editorStore', {
  state: () => ({
    components: testComponents,
    currentElement: ''
  })
})

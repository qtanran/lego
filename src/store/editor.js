import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const testComponents = [
  {
    id: uuidv4(),
    name: 'l-text',
    props: {
      text: 'hello',
      fontSize: '20px',
      color: 'red',
      'lineHeight': '1',
      textAlign: 'left',
      fontFamily: 'SimSun,STSong'
    }
  },
  {
    id: uuidv4(),
    name: 'l-text',
    props: {
      text: 'hello2',
      fontSize: '10px',
      fontWeight: 'bold',
      'lineHeight': '2',
      textAlign: 'right',
      fontFamily: ''
    }
  },
  {
    id: uuidv4(),
    name: 'l-text',
    props: {
      text: 'hello3',
      fontSize: '15px',
      actionType: 'url',
      url: 'https://www.baidu.com',
      'lineHeight': '3',
      textAlign: 'left',
      fontFamily: ''
    }
  },
  {
    id: uuidv4(),
    name: 'l-image',
    props: {
      src: 'http://lego-backend-qu.oss-cn-beijing.aliyuncs.com/test%5CfCn_Yl.png',
      width: '100px'
    }
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
    addComponent(component) {
      this.components.push(component)
    },
    setActive(currentId) {
      this.currentElement = currentId
    },
    updateComponent({ key, value }) {
      const updatedComponent = this.components.find(
        component => component.id === this.currentElement
      )
      console.log(key, value)
      if (updatedComponent) {
        updatedComponent.props[key] = value
      }
    }
  }
})

import { defineStore } from 'pinia'

const testData = [
  {
    id: 1,
    coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png',
    title: '前端架构师直播海报',
    author: 'viking',
    copiedCount: 1
  },
  {
    id: 2,
    coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png',
    title: '前端架构师直播海报',
    author: 'viking',
    copiedCount: 1
  },
  {
    id: 3,
    coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-682056.png',
    title: '前端架构师直播海报',
    author: 'viking',
    copiedCount: 1
  },
  {
    id: 4,
    coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png',
    title: '前端架构师直播海报',
    author: 'viking',
    copiedCount: 1
  },
  {
    id: 5,
    coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png',
    title: '前端架构师直播海报',
    author: 'viking',
    copiedCount: 1
  },
  {
    id: 6,
    coverImg: 'https://static.imooc-lego.com/upload-files/screenshot-677311.png',
    title: '前端架构师直播海报',
    author: 'viking',
    copiedCount: 1
  }
]

export const useTemplatesStore = defineStore('templatesStore', {
  state: () => ({
    templates: testData
  }),
  getters: {
    getTemplateById: state => id => state.templates.find(t => t.id === id)
  }
})

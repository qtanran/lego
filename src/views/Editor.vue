<script setup>
import { useEditorStore } from '@/store/editor.js'
import LText from '@/components/LText.vue'
import ComponentsList from '@/components/ComponentsList.vue'
import { defaultTextTemplates } from '@/defaultTemplates.js'
import EditWrapper from '@/components/EditWrapper.vue'
import PropsTable from '@/components/PropsTable.vue'

const editorStore = useEditorStore()

const componentsObj = {
  'l-text': LText
}

const addItem = props => {
  editorStore.addComponent(props)
}
</script>

<template>
  <div class="editor">
    <el-container>
      <el-aside width="300px" style="background: #fff">
        <div class="sidebar-container">
          组件列表 <components-list :list="defaultTextTemplates" @onItemClick="addItem" />
        </div>
      </el-aside>
      <el-main class="preview-container">
        <p>画布区域</p>
        <div class="preview-list" id="canvas-area">
          <edit-wrapper
            @setActive="editorStore.setActive(component.id)"
            v-for="component in editorStore.components"
            :key="component.id"
            :id="component.id"
            :active="
              component.id === (editorStore.currentElement && editorStore.getCurrentElement.id)
            "
          >
            <component :is="componentsObj[component.name]" v-bind="component.props" />
          </edit-wrapper>
        </div>
      </el-main>
      <el-aside width="300px" style="background: #fff" class="settings-panel">
        组件属性
        <props-table
          v-if="editorStore.getCurrentElement?.props"
          :props="editorStore.getCurrentElement?.props"
        />
        <pre>
        {{ editorStore.getCurrentElement?.props }}
        </pre>
      </el-aside>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-aside {
  overflow: hidden;
}
.preview-container {
  padding: 24px;
  margin: 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #cccccc;

  .preview-list {
    padding: 0;
    margin: 50px 0 0 0;
    min-width: 375px;
    min-height: 200px;
    border: 1px solid #efefef;
    background: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    max-height: 80vh;
  }
}
</style>

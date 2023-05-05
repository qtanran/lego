<script setup></script>

<template>
  <div class="editor">
    <el-container>
      <el-aside width="300px" style="background: yellow">
        <div class="sidebar-container">组件列表</div>
      </el-aside>
      <el-main class="preview-container">
        <p>画布区域</p>
        <div class="preview-list" id="canvas-area"></div>
      </el-main>
      <el-aside width="300px" style="background: purple" class="settings-panel">组件属性</el-aside>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.preview-container {
  padding: 24px;
  margin: 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

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

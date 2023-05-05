<script setup>
defineProps({
  list: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    default: 'work'
  }
})
</script>

<template>
  <div class="template-list-component">
    <el-row :gutter="16">
      <el-col :span="6" v-for="item in list" :key="item.id" class="poster-item">
        <el-card :body-style="{ padding: '0px' }">
          <div class="img-container">
            <img :src="item.coverImg" v-if="item.coverImg" />
            <img
              src="http://typescript-vue.oss-cn-beijing.aliyuncs.com/vue-marker/5f81cca3f3bf7a0e1ebaf885.png"
              v-else
            />
            <div class="hover-item">
              <router-link :to="{ name: 'template', params: { id: item.id } }">
                <el-button size="large" type="primary">使用该模版创建</el-button>
              </router-link>
            </div>
          </div>
          <div class="description-detail">
            <span>作者：Test</span>
            <span class="user-number">0</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.poster-item {
  margin-bottom: 20px;

  .el-card {
    border-radius: 12px;

    .img-container {
      height: 390px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        transition: all ease-in 0.2s;
      }
    }

    .description-detail {
      display: flex;
      justify-content: space-between;
      padding: 13px 12px;
      color: #999;

      .user-number {
        font-weight: bold;
      }
    }

    .hover-item {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: none;
      background: rgba(0, 0, 0, 0.6);
      align-items: center;
      justify-content: center;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
  }

  &:hover {
    .el-card {
      .img-container {
        img {
          transform: scale(1.25);
        }
      }

      .hover-item {
        display: flex;
      }
    }
  }
}
</style>

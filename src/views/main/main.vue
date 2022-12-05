<template>
  <div id="main">
    <el-container class="main-content">
      <el-aside width="210px">Aside</el-aside>
      <el-container class="page">
        <el-header class="page-header">Header</el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
#main {
  // 占据整个页面
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .main-content,
  .page {
    height: 100%;
  }

  .main-content {
    .el-aside {
      background-color: #001529;
    }
  }

  .page {
    .el-header {
      height: 48px;
    }
    .page-content {
      height: calc(100% - 48px); // 确定el-main的高度，否则将由文字撑开高度
      padding: 20px 20px;
      color: #333;
      text-align: center;
      background-color: #f0f2f5;
    }
  }
}
</style>

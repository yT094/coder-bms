<template>
  <div id="nav-header">
    <i
      class="folder-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="onFolderIconClick"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    // 默认不折叠
    const isFold = ref(false)
    const onFolderIconClick = () => {
      isFold.value = !isFold.value
    }

    return {
      isFold,
      onFolderIconClick
    }
  }
})
</script>

<style scoped lang="less">
#nav-header {
  .folder-menu {
    font-size: 30px;
    // 鼠标放上去，变成一个小手
    cursor: pointer;
  }
}
</style>

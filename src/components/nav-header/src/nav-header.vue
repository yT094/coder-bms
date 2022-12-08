<template>
  <div id="nav-header">
    <i
      class="r-folder-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="onFolderIconClick"
    ></i>
    <div class="r-content">
      <div>面包屑</div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import userInfo from '@/components/nav-header/src/user-info.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { userInfo },
  emits: ['foldChange'],
  setup(props, { emit }) {
    // 默认不折叠
    const isFold = ref(false)
    const onFolderIconClick = () => {
      isFold.value = !isFold.value
      //子组件向父组件传递值
      emit('foldChange', isFold.value)
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
  display: flex;
  align-items: center;
  .r-folder-menu {
    font-size: 30px;
    // 鼠标放上去，变成一个小手
    cursor: pointer;
  }

  .r-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // 让 "面包屑" 和 "用户信息" 分居两边
    flex: 1;
  }
}
</style>

<template>
  <div id="nav-header">
    <i
      class="r-folder-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="onFolderIconClick"
    ></i>
    <div class="r-content">
      <jn-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import userInfo from '@/components/nav-header/src/user-info.vue'
import { defineComponent, ref, computed } from 'vue'
import JnBreadcrumb from '@/base-ui/breadcrumb'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: { userInfo, JnBreadcrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    // 默认不折叠
    const isFold = ref(false)
    const onFolderIconClick = () => {
      isFold.value = !isFold.value
      //子组件向父组件传递值
      emit('foldChange', isFold.value)
    }

    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      onFolderIconClick,
      breadcrumbs
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

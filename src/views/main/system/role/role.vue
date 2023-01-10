<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @addBtnClick="handleAddBtnClick"
      @editBtnClick="handleEditBtnClick"
    />
    <page-modal
      pageName="role"
      ref="pageModalRef"
      :dialogFormConfig="dialogFormConfig"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
    >
      <div class="e-menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import { useStore } from '@/store'
import { ElTree } from 'element-plus'
import { menuMapLeafKeys } from '@/utils/map-menus'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search-config'
import { contentTableConfig } from './config/content-config'
import { dialogFormConfig } from './config/modal-config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  name: 'role',
  setup() {
    // 展示菜单权限数据
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    // 将选择的菜单权限送给服务器
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    // 点击编辑按钮时，回显菜单权限数据
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallBack = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    // 引入hook中的数据和方法
    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()
    const [defaultInfo, pageModalRef, handleAddBtnClick, handleEditBtnClick] =
      usePageModal(undefined, editCallBack)

    return {
      searchFormConfig,
      contentTableConfig,
      dialogFormConfig,
      pageContentRef,
      handleQueryBtnClick,
      handleResetBtnClick,
      defaultInfo,
      pageModalRef,
      handleAddBtnClick,
      handleEditBtnClick,
      menus,
      handleCheckChange,
      otherInfo,
      elTreeRef
    }
  }
})
</script>

<style lang="less" scoped>
.role {
  .e-menu-tree {
    margin-left: 35px;
  }
}
</style>

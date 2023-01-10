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
          ref="menuTreeRef"
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
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'

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
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()
    const [defaultInfo, pageModalRef, handleAddBtnClick, handleEditBtnClick] =
      usePageModal()

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
      otherInfo
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

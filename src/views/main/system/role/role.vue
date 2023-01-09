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
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
      handleEditBtnClick
    }
  }
})
</script>

<style scoped></style>

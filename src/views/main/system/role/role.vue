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
      @addBtnClick="onAddBtnClick"
      @editBtnClick="onEditBtnClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search-config'
import { contentTableConfig } from './config/content-config'

import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  name: 'role',
  setup() {
    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleQueryBtnClick,
      handleResetBtnClick
    }
  }
})
</script>

<style scoped></style>

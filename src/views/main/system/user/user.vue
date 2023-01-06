<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @addBtnClick="onAddBtnClick"
      @editBtnClick="onEditBtnClick"
    />
    <page-modal :dialogFormConfig="dialogFormConfig" ref="pageModalRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/page-search'
import { contentTableConfig } from './config/page-content'
import { dialogFormConfig } from './config/page-modal'

import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  name: 'user',
  setup() {
    // 调用hook获取公共变量和函数
    const [pageModalRef, onAddBtnClick, onEditBtnClick] = usePageModal()

    return {
      searchFormConfig,
      contentTableConfig,
      dialogFormConfig,
      pageModalRef,
      onAddBtnClick,
      onEditBtnClick
    }
  }
})
</script>

<style scoped lang="less">
.user {
  .r-form {
    margin-bottom: 20px;
  }
}
</style>

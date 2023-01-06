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
    // pageModal相关的hook逻辑
    // 1.处理密码的逻辑，不宜写在公共usePageModal，这属于user.vue特有的
    const addCallBack = () => {
      const passwordItem = dialogFormConfig.formItems.find(
        (item) => item.field === 'password'
      )
      // 这里肯定有值，使用类型断言
      passwordItem!.isHidden = false
    }
    const editCallBack = () => {
      const passwordItem = dialogFormConfig.formItems.find(
        (item) => item.field === 'password'
      )
      // 这里肯定有值，使用类型断言
      passwordItem!.isHidden = true
    }

    // 调用hook获取公共变量和函数
    const [pageModalRef, onAddBtnClick, onEditBtnClick] = usePageModal(
      addCallBack,
      editCallBack
    )

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

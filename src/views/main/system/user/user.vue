<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      @addBtnClick="onAddBtnClick"
      @editBtnClick="onEditBtnClick"
    />
    <page-modal
      :defaultInfo="defaultInfo"
      :dialogFormConfig="dialogFormConfigRef"
      pageName="users"
      ref="pageModalRef"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/page-search'
import { contentTableConfig } from './config/page-content'
import { dialogFormConfig } from './config/page-modal'

import { usePageModal } from '@/hooks/use-page-modal'
import { usePageSearch } from '@/hooks/use-page-search'
import { useStore } from '@/store'

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

    // 2.动态加载部门和角色列表
    const store = useStore()
    const dialogFormConfigRef = computed(() => {
      const departmentItem = dialogFormConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { label: item.name, value: item.id }
      })

      const roleItem = dialogFormConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.entireRole.map((item) => {
        return { label: item.name, value: item.id }
      })
      return dialogFormConfig
    })

    // 调用hook获取公共变量和函数
    const [defaultInfo, pageModalRef, onAddBtnClick, onEditBtnClick] =
      usePageModal(addCallBack, editCallBack)

    const [pageContentRef, handleQueryBtnClick, handleResetBtnClick] =
      usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      dialogFormConfig,
      defaultInfo,
      pageModalRef,
      onAddBtnClick,
      onEditBtnClick,
      pageContentRef,
      handleQueryBtnClick,
      handleResetBtnClick,
      dialogFormConfigRef
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

<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    />
    <page-content
      pageName="users"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @addBtnClick="handleAddBtnClick"
      @editBtnClick="handleEditBtnClick"
    />
    <page-modal
      pageName="users"
      ref="pageModalRef"
      :dialogFormConfig="dialogFormConfigRef"
      :defaultInfo="defaultInfo"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/page-search'
import { contentTableConfig } from './config/page-content'
import { dialogFormConfig } from './config/page-modal'

import { usePageModal } from '@/hooks/use-page-modal'
import { usePageSearch } from '@/hooks/use-page-search'

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
    const [defaultInfo, pageModalRef, handleAddBtnClick, handleEditBtnClick] =
      usePageModal(addCallBack, editCallBack)

    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()

    return {
      pageModalRef,
      pageContentRef,
      dialogFormConfigRef,
      searchFormConfig,
      contentTableConfig,
      dialogFormConfig,
      handleAddBtnClick,
      handleEditBtnClick,
      handleQueryBtnClick,
      handleResetBtnClick,
      defaultInfo
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

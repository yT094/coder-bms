<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" pageName="users" />
    <page-modal :dialogFormConfig="dialogFormConfig" />
  </div>
</template>

<script lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { searchFormConfig } from './config/page-search'
import { contentTableConfig } from './config/page-content'
import { dialogFormConfig } from './config/page-modal'

import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  name: 'user',
  setup() {
    return {
      searchFormConfig,
      contentTableConfig,
      dialogFormConfig
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

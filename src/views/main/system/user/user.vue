<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" pageName="users" />
  </div>
</template>

<script lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/page-search'
import { contentTableConfig } from './config/page-content'

import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  name: 'user',
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
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

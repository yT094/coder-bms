<template>
  <div class="menu">
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    >
      <template #icon="scope">
        <el-button type="text" :icon="scope.row.icon"></el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content-config'

export default defineComponent({
  name: 'jn-menu',
  components: {
    PageContent
  },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>

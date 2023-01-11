<template>
  <div class="goods">
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      @addBtnClick="handleAddBtnClick"
      @editBtnClick="handleEditBtnClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content-config'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    return { contentTableConfig }
  }
})
</script>

<style scoped></style>

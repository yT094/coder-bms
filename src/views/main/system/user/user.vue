<template>
  <div class="user">
    <jn-form v-bind="userFormConfig" />
  </div>
</template>

<script lang="ts">
import JnForm from '@/base-ui/Form'
import { defineComponent } from 'vue'
import { userFormConfig } from './config'

export default defineComponent({
  components: {
    JnForm
  },
  name: 'user',
  setup() {
    return {
      userFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>

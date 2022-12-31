<template>
  <div class="user">
    <jn-form v-bind="userFormConfig" :formData="formData" />
  </div>
</template>

<script lang="ts">
import JnForm from '@/base-ui/Form'
import { defineComponent, reactive } from 'vue'
import { userFormConfig } from './config'

export default defineComponent({
  components: {
    JnForm
  },
  name: 'user',
  setup() {
    const formData = reactive({
      id: '',
      sport: '',
      createTime: ''
    })
    return {
      userFormConfig,
      formData
    }
  }
})
</script>

<style scoped lang="less"></style>

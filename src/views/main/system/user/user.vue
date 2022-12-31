<template>
  <div class="user">
    <jn-form v-bind="userFormConfig" v-model="formData" />
  </div>
</template>

<script lang="ts">
import JnForm from '@/base-ui/Form'
import { defineComponent, ref } from 'vue'
import { userFormConfig } from './config'

export default defineComponent({
  components: {
    JnForm
  },
  name: 'user',
  setup() {
    const formData = ref({
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

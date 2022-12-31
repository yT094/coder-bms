<template>
  <div class="user">
    <jn-form v-bind="userFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="r-btn">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </jn-form>
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

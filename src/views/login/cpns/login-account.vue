<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'

import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  components: {},
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      console.log('111111', formRef)
      formRef.value?.validate((valid) => {
        console.log('valid', valid)
        if (valid) {
          console.log('account正在开始登录~')
        }
      })
    }
    return {
      rules,
      account,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>

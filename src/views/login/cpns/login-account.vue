<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { rules } from '../config/account-config'

import { defineComponent, reactive } from 'vue'
export default defineComponent({
  components: {},
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    return {
      rules,
      account
    }
  }
})
</script>

<style scoped lang="less"></style>

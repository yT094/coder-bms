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
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import localStorage from '@/utils/cache'

export default defineComponent({
  components: {},
  setup() {
    const store = useStore()
    const account = reactive({
      name: localStorage.getCache('name') ?? '',
      password: localStorage.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            localStorage.setCache('name', account.name)
            localStorage.setCache('password', account.password)
          } else {
            localStorage.deleteCache('name')
            localStorage.deleteCache('password')
          }

          // 2.开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...account })
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

<template>
  <div class="login-panel">
    <h2 class="l-title">后台管理系统</h2>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <span><i class="el-icon-user-solid"></i> 账号登录</span>
          </span>
        </template>
        <!-- 组件实例: 组件的工作方式与类有点相似 -->
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="l-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>

    <div class="l-login-btn">
      <el-button type="primary" class="btn" @click="onLoginBtn"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    // 1.定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>() // 获取组件的类型
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')

    // 2.定义方法
    const onLoginBtn = () => {
      console.log('监听登录按钮')
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('phoneRef调用loginAction')
      }
    }
    return { isKeepPassword, onLoginBtn, accountRef, phoneRef, currentTab }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .l-title {
    text-align: center;
  }

  .l-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .l-login-btn {
    margin-top: 10px;
    .btn {
      width: 100%;
    }
  }
}
</style>

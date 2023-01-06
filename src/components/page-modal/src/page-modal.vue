<template>
  <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
    <span>
      <jn-form v-bind="dialogFormConfig" v-model="formData"></jn-form>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JnForm from '@/base-ui/Form'

export default defineComponent({
  name: 'PageModal',
  components: {
    JnForm
  },
  props: {
    dialogFormConfig: {}
  },
  setup() {
    const dialogVisible = ref(false)
    return { dialogVisible }
  }
})
</script>

<style lang="less" scoped></style>

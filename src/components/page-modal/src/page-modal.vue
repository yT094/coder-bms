<template>
  <el-dialog
    v-model="dialogVisible"
    title="新建用户"
    width="30%"
    center
    destroy-on-close
  >
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
import { defineComponent, ref, watch } from 'vue'
import JnForm from '@/base-ui/Form'

export default defineComponent({
  name: 'PageModal',
  components: {
    JnForm
  },
  props: {
    dialogFormConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      // newValue 也可以换成 defaultInfo
      (newValue) => {
        for (const item of props.dialogFormConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    return { dialogVisible, formData }
  }
})
</script>

<style lang="less" scoped></style>

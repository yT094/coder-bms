<template>
  <div class="page-search">
    <jn-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="r-btn">
          <el-button icon="el-icon-refresh" @click="onResetBtn">重置</el-button>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >查询</el-button
          >
        </div>
      </template>
    </jn-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JnForm from '@/base-ui/Form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    JnForm
  },
  emits: ['queryBtnClick'],
  setup(props, { emit }) {
    // formData 中的属性应该动态决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 用户点击重置
    const onResetBtn = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
    }

    // 用户点击查询
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return { formData, onResetBtn, handleQueryClick }
  }
})
</script>

<style lang="less" scoped>
.page-search {
  padding: 20px 0;
}
</style>

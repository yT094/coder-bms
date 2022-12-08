<template>
  <div class="jn-form">
    <el-form :label-width="labelWidth">
      <template v-for="item in formItems" :key="item.label">
        <el-form-item :label="item.label">
          <div v-if="item.type === 'input'">
            <el-input :placeholder="item.placeholder"></el-input>
          </div>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    formItems: {
      type: IFormItem,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="jn-form">
    <el-form :label-width="labelWidth">
      <template v-for="item in formItems" :key="item.label">
        <el-form-item :label="item.label">
          <div v-if="item.type === 'input'">
            <el-input :placeholder="item.placeholder"></el-input>
          </div>
          <div v-else-if="item.type === 'select'">
            <el-select :placeholder="item.placeholder" style="width: 100%">
              <el-option
                v-for="option in item.options"
                :key="option.value"
                :value="option.value"
                >{{ option.value }}</el-option
              >
            </el-select>
          </div>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
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

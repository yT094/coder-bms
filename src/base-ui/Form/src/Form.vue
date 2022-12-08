<template>
  <div class="jn-form">
    <el-row>
      <el-form :label-width="labelWidth">
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
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
              <div v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.timeOptions"
                ></el-date-picker>
              </div>
            </el-form-item>
          </el-col>
        </template>
      </el-form>
    </el-row>
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
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="jn-form">
    <div class="m-header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item v-if="!item.isHidden" :label="item.label">
              <div v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </div>
              <div v-else-if="item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="true"
                  v-model="formData[`${item.field}`]"
                />
              </div>
              <div v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
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
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </div>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="m-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
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
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )
    return { formData }
  }
})
</script>

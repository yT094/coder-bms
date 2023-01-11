<template>
  <div class="card">
    <el-card>
      <template #header>
        <div class="card-name">
          <span>{{ title }}</span>
        </div>
      </template>
      <div class="card-item">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'card',
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.card {
  .card-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
  }

  .card-item {
    margin-bottom: 10px;
  }
}
</style>

<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="7">
        <jn-card title="分类商品数量（饼图）">1</jn-card>
      </el-col>
      <el-col :span="10">
        <jn-card title="不同城市商品销量">2</jn-card>
      </el-col>
      <el-col :span="7">
        <jn-card title="分类商品数量（玫瑰图）">3</jn-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <jn-card title="分类商品的销量">4</jn-card>
      </el-col>
      <el-col :span="12">
        <jn-card title="分类商品的收藏">5</jn-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JnCard from '@/base-ui/card'

export default defineComponent({
  name: 'dashboard',
  components: {
    JnCard
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>

<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="7">
        <jn-card title="分类商品数量（饼图）">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </jn-card>
      </el-col>
      <el-col :span="10">
        <jn-card title="不同城市商品销量">2</jn-card>
      </el-col>
      <el-col :span="7">
        <jn-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </jn-card>
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
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import JnCard from '@/base-ui/card'
import { PieEchart, RoseEchart } from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    JnCard,
    PieEchart,
    RoseEchart
  },
  setup() {
    // 请求数据
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    // 发送数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    return { categoryGoodsCount }
  }
})
</script>

<style scoped></style>

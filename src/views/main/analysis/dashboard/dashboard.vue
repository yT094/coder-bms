<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="7">
        <jn-card title="分类商品数量（饼图）">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </jn-card>
      </el-col>
      <el-col :span="10">
        <jn-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </jn-card>
      </el-col>
      <el-col :span="7">
        <jn-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </jn-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <jn-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </jn-card>
      </el-col>
      <el-col :span="12">
        <jn-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </jn-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import JnCard from '@/base-ui/card'
import {
  PieEchart,
  RoseEchart,
  lineEchart,
  barEchart,
  mapEchart
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    JnCard,
    PieEchart,
    RoseEchart,
    lineEchart,
    barEchart,
    mapEchart
  },
  setup() {
    // 请求数据
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped></style>

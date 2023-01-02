<template>
  <div class="page-content">
    <jn-table :listData="dataList" v-bind="contentTableConfig">
      <template #status="scope">
        <el-button> {{ scope.row.enable ? '启用' : '禁用' }} </el-button>
      </template>
      <template #createAt="scope">
        <strong>{{ scope.row.createAt }}</strong>
      </template>
    </jn-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import JnTable from '@/base-ui/table'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    JnTable
  },
  props: {
    pageName: {
      type: String,
      required: true
    },
    contentTableConfig: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )

    return { dataList }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  border-top: 20px solid #f5f5f5;
}
</style>

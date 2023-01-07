<template>
  <div class="page-content">
    <jn-table :listData="dataList" v-bind="contentTableConfig">
      <template #headerHandler>
        <el-button type="primary" size="medium" @click="handleAddBtnClick"
          >新建用户</el-button
        >
      </template>

      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>

      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>

      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>

      <template #handler="scope">
        <div class="t-btn">
          <el-button
            icon="el-icon-edit"
            size="mini"
            type="text"
            @click="handleEditBtnClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="handleDeleteBtnClick"
            >删除</el-button
          >
        </div>
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
  emits: ['editBtnClick', 'deleteBtnClick', 'addBtnClick'],
  setup(props, { emit }) {
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

    // 处理新建和编辑按钮
    const handleAddBtnClick = () => {
      emit('addBtnClick')
    }

    const handleEditBtnClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return { dataList, handleAddBtnClick, handleEditBtnClick }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>

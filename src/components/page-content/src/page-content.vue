<template>
  <div class="page-content">
    <jn-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary" size="medium" @click="handleAddBtnClick">{{
          contentTableConfig.btnName
        }}</el-button>
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
            @click="handleDeleteBtnClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
    </jn-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from 'vue'
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
    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    // 用户切换分页组件时，会被监听到
    watch(pageInfo, () => getPageData())

    const store = useStore()
    // 请求网络数据
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    // 处理新建和编辑按钮
    const handleAddBtnClick = () => {
      emit('addBtnClick')
    }

    const handleEditBtnClick = (item: any) => {
      emit('editBtnClick', item)
    }

    const handleDeleteBtnClick = (item: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }

    return {
      dataList,
      dataCount,
      getPageData,
      handleAddBtnClick,
      handleEditBtnClick,
      handleDeleteBtnClick,
      pageInfo
    }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>

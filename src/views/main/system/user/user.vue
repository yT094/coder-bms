<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <div class="r-content">
      <jn-table :listData="userList" :propList="propList">
        <template #status="scope">
          <el-button> {{ scope.row.enable ? '启用' : '禁用' }} </el-button>
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
      </jn-table>
    </div>
  </div>
</template>

<script lang="ts">
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/page-search'
import JnTable from '@/base-ui/table'
import { useStore } from '@/store'
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  components: {
    PageSearch,
    JnTable
  },
  name: 'user',
  setup() {
    const formData = ref({
      id: '',
      sport: '',
      createTime: ''
    })

    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    console.log('qqqqqqqqqqqqqqqqq', userList)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      }
    ]

    return {
      searchFormConfig,
      formData,
      propList,
      userList
    }
  }
})
</script>

<style scoped lang="less">
.user {
  padding: 20px;
  .r-form {
    margin-bottom: 20px;
  }
}
</style>

import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = (item?: any) => void

export function usePageModal(addCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  // 回填表单数据
  const defaultInfo = ref({})
  const handleAddBtnClick = () => {
    // 与编辑按钮共用，初始化一下是有必要的
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // addCb 是可选的，故使用逻辑运算符，有值才调用
    addCb && addCb()
  }

  const handleEditBtnClick = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb(item)
  }
  return [defaultInfo, pageModalRef, handleAddBtnClick, handleEditBtnClick]
}

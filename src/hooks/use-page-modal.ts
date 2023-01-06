import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = () => void

export function usePageModal(addCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const onAddBtnClick = () => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // addCb 是可选的，故使用逻辑运算符，有值才调用
    addCb && addCb()
  }

  const onEditBtnClick = () => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }
  return [pageModalRef, onAddBtnClick, onEditBtnClick]
}

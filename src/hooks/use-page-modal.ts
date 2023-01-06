import { ref } from 'vue'
import PageModal from '@/components/page-modal'

export function usePageModal() {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const onAddBtnClick = () => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
  }
  return [pageModalRef, onAddBtnClick]
}

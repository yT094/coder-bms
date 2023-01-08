import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleQueryBtnClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, handleQueryBtnClick]
}

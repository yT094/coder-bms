import jnRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return jnRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function createPageData(url: string, newData: any) {
  console.log('33333333333', url, newData)
  return jnRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

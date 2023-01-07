import jnRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return jnRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function createPageData(url: string, newData: any) {
  return jnRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return jnRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}

import jnRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return jnRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

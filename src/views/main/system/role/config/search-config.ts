import { IForm } from '@/base-ui/Form/types'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 20px'
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '选择时间',
      timeOptions: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ]
}

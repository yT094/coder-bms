import { IForm } from '@/base-ui/Form/types'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'sport',
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      options: [
        { title: 'basketball', value: '篮球' },
        { title: 'football', value: '足球' }
      ]
    },
    {
      field: 'createTime',
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

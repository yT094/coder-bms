import { IForm } from '@/base-ui/Form/types'

export const userFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
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

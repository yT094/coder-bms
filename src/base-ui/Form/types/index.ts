type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  placeholder?: any
  // select options
  options?: any[]
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
}

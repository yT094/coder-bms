import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  // 返回 bool 值
  return !!permissions.find((item: any) => item === verifyPermission)
}

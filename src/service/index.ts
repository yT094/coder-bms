import JNRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const jnRequest = new JNRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default jnRequest

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'product') {
  BASE_URL = 'www.coderycs.com/pro'
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'www.coderycs.com/test'
}

export { BASE_URL, TIME_OUT }

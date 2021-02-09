import axios, { AxiosRequestConfig, Method } from 'axios'
import formatString from 'string-format'

export const getApiPath = (
  path: string,
  params?: { [key: string]: string | number },
) => {
  return (
    process.env.NEXT_PUBLIC_BASE_API_URL +
    'wp-json/api/' +
    formatString(path, { ...params })
  )
}

export const createAxiosWithInterceptor = (
  token: string,
  tokenType: string,
) => {
  const apiInstance = axios.create()
  apiInstance.interceptors.request.use(
    (config) => {
      config.headers = {
        Authorization: `${tokenType} ${token}`,
      }
      return config
    },
    (error) => {
      Promise.reject(error)
    },
  )

  return apiInstance
}

export const callApi = async (
  url: string,
  method: Method,
  options?: AxiosRequestConfig,
) => {
  try {
    const res = await axios({ url, method, ...options })
    if (res) return res.data
  } catch (err) {
    return null
  }
  return null
}

export const checkMobile = (userAgent: string): boolean => {
  if (/Tablet|iPad/i.test(userAgent)) {
    return false
  }
  return (
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(userAgent) ||
    /\b(Android|Windows Phone|iPod)\b/i.test(userAgent)
  )
}

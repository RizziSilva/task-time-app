import axios from 'axios'
import { BASE_URL } from '@constants'
import { getAccessToken, getRefreshToken } from '@utils'

const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

async function refreshToken() {
  try {
    const refreshToken = await getRefreshToken()
    const { data } = await axios.post(BASE_URL, {
      refresh_token: refreshToken,
    })
  } catch (error) {}
}

apiInstance.interceptors.request.use(async (config) => {
  const token = await getAccessToken()

  if (token) config.headers.Authorization = `Bearer ${token}`

  return config
})

apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    const isUnauthorizedError = error.response?.status === 401
    const shouldReject = !isUnauthorizedError || originalRequest._retry

    if (shouldReject) return Promise.reject(error)

    originalRequest._retry = true
  },
)

export { apiInstance }

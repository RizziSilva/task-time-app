import axios from 'axios'
import { BASE_URL } from '@constants'
import { forceUserLogout, store } from '@slices'
import { getAccessToken, getRefreshToken, saveTokens } from '@utils'

const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiInstance.interceptors.request.use(async (config) => {
  const token = await getAccessToken()

  if (token) config.headers.Authorization = `Bearer ${token}`

  return config
})

// TODO silva.william 27/05/2026: Lidar com multiplas requests durante a atualização dos tokens.
apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    const isUnauthorizedError = error.response?.status === 401
    const shouldReject = !isUnauthorizedError || originalRequest._retry

    if (shouldReject) return Promise.reject(error)

    originalRequest._retry = true

    try {
      const currentRefreshToken = await getRefreshToken()
      const { data } = await apiInstance.post(`/auth/refresh`, {}, { headers: { Authorization: `Bearer ${currentRefreshToken}` } })
      const { access_token: accessToken, refresh_token: refreshToken } = data

      await saveTokens(accessToken, refreshToken)

      originalRequest.headers.Authorization = `Bearer ${data.accessToken}`

      return apiInstance(originalRequest)
    } catch (error) {
      store.dispatch(forceUserLogout())

      return Promise.reject(error)
    }
  },
)

export { apiInstance }

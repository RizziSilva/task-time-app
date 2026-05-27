import axios from 'axios'
import { LOGIN_ERROR_MESSAGE, UNAUTHORIZED_ERROR_MESSAGE } from '@constants'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '@services'
import { clearTokens, getAccessToken, saveTokens } from '@utils'

const { login } = AuthService()

// TODO silva.william 27/05/2026: Get user info.
export const checkUserAction = createAsyncThunk('auth/check', async () => {
  const accessToken = await getAccessToken()
  if (!accessToken) return null

  return {}
})

// TODO silva.william 27/05/2026: Get user info on login success.
export const loginAction = createAsyncThunk('auth/login', async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
  try {
    const { access_token, refresh_token } = await login(email, password)
    await saveTokens(access_token, refresh_token)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const isUnauthorized = error.response?.status === 401
      if (isUnauthorized) return rejectWithValue(UNAUTHORIZED_ERROR_MESSAGE)
    }

    return rejectWithValue(LOGIN_ERROR_MESSAGE)
  }
})

export const logoutAction = createAsyncThunk('auth/logout', async () => {
  await clearTokens()
})

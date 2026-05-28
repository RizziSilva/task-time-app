import axios from 'axios'
import { LOGIN_ERROR_MESSAGE, UNAUTHORIZED_ERROR_MESSAGE } from '@constants'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService, UserService } from '@services'
import { clearTokens, getAccessToken, saveTokens } from '@utils'

const { login } = AuthService()
const { getUserInfo } = UserService()

export const getUserInfoAction = createAsyncThunk('auth/getUser', async (_, { rejectWithValue }) => {
  try {
    const { data } = await getUserInfo()

    return data
  } catch (error) {
    return rejectWithValue(LOGIN_ERROR_MESSAGE)
  }
})

export const checkUserAction = createAsyncThunk('auth/check', async (_, { dispatch, rejectWithValue }) => {
  const accessToken = await getAccessToken()
  if (!accessToken) return null

  try {
    const user = await dispatch(getUserInfoAction()).unwrap()

    return user
  } catch (error) {
    return rejectWithValue({})
  }
})

export const loginAction = createAsyncThunk('auth/login', async ({ email, password }: { email: string; password: string }, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await login(email, password)
    const { access_token, refresh_token } = data

    await saveTokens(access_token, refresh_token)

    const user = await dispatch(getUserInfoAction()).unwrap()

    return user
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

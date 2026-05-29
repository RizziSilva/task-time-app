import { createSlice } from '@reduxjs/toolkit'
import { UserType } from '@types'
import { checkUserAction, loginAction, logoutAction } from './auth.action'

type AuthState = {
  user: UserType | null
  isLoading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  isLoading: true,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkUserAction.fulfilled, (state, action) => {
      state.user = action.payload as UserType
      state.isLoading = false
    })
    builder.addCase(checkUserAction.rejected, (state, action) => {
      state.user = null
      state.isLoading = false
    })
    builder.addCase(checkUserAction.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = null
      state.user = action.payload as UserType
    })
    builder.addCase(loginAction.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(loginAction.rejected, (state, action) => {
      state.error = action.payload as string
    })
    builder.addCase(logoutAction.fulfilled, (state, action) => {
      state.user = null
      state.error = null
      state.isLoading = false
    })
  },
})

export const {} = authSlice.actions
export { checkUserAction, loginAction, logoutAction }
export default authSlice.reducer

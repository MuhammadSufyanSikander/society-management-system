import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  loading: false,
  userInfo: {},
  errorMessage: '',
  token: null,
  step: 1,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loading = true
      state.error = null
    },
    success: (state, action) => {
      state.loading = false
      state.error = null
      state.userInfo = action.payload.userInfo
      state.token = action.payload.token
    },
    failed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    setAuthUserInfo: (state, action) => {
      const { key, value } = action.payload
      state.userInfo[key] = value
    },
    setAuthValue: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
    },
    logout: (state, action) => {
      state.loading = false
      state.error = null
      state.userInfo = {}
      state.token = null
    },
    resetAuthValues: (state, action) => {
      state = initialState
    },
    register: (state, action) => {
      state.loading = true
      state.error = null
    },
    registerSuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
  },
})

export default authSlice.reducer
export const { logout, resetAuthValues, register, registerSuccess, failed, login, setAuthValue, success, setAuthUserInfo } = authSlice.actions

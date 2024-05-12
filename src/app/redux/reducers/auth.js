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
      state.token = true
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

    resetAuthValues: (state, action) => {
      state = initialState
    },
  },
})

export default authSlice.reducer
export const { resetAuthValues, failed, login, setAuthValue, success, setAuthUserInfo } = authSlice.actions

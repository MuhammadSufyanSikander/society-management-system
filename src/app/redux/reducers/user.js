import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  loading: false,
  users: [],
  errorMessage: '',
  isOpenAcceptModal: false,
  isOpenRejectModal: false,
}

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.loading = true
      state.error = null
    },
    getUsersSuccess: (state, action) => {
      state.loading = false
      state.error = null
      state.users = action.payload.users
    },
    getUsersFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    modifyUser: (state, action) => {
      state.loading = true
      state.error = null
    },
    modifyUserSuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    modifyUserFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    setUserValue: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
    },
  },
})

export default usersSlice.reducer
export const { setUserValue, modifyUser, modifyUserFailed, modifyUserSuccess, getUsers, getUsersFailed, getUsersSuccess } = usersSlice.actions

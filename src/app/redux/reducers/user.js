import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  loading: false,
  users: [],
  owners: [],
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
    getOwners: (state, action) => {
      state.loading = true
      state.error = null
    },
    getOwnersSuccess: (state, action) => {
      state.loading = false
      state.error = null
      state.owners = action.payload.owners
    },
    getOwnersFailed: (state, action) => {
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
    sendEmail: (state, action) => {
      state.loading = true
      state.error = null
    },
    sendEmailSuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    sendEmailFailed: (state, action) => {
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
export const {
  sendEmail,
  sendEmailFailed,
  sendEmailSuccess,
  getOwners,
  getOwnersFailed,
  getOwnersSuccess,
  setUserValue,
  modifyUser,
  modifyUserFailed,
  modifyUserSuccess,
  getUsers,
  getUsersFailed,
  getUsersSuccess,
} = usersSlice.actions

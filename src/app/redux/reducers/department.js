import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  loading: false,
  departments: [],
  errorMessage: '',
}

const department = createSlice({
  name: 'department',
  initialState,
  reducers: {
    getDepartments: (state, action) => {
      state.loading = true
      state.error = null
    },
    getDepartmentsSuccess: (state, action) => {
      state.loading = false
      state.error = null
      state.departments = action.payload.departments
    },
  },
})

export default department.reducer
export const { getDepartments, getDepartmentsSuccess } = department.actions

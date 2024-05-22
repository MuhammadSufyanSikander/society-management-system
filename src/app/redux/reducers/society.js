import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  loading: false,
  societies: [],
  errorMessage: '',
}

const society = createSlice({
  name: 'society',
  initialState,
  reducers: {
    getSocieties: (state, action) => {
      state.loading = true
      state.error = null
    },
    getSocietiesSuccess: (state, action) => {
      state.loading = false
      state.error = null
      state.societies = action.payload.societies
    },
  },
})

export default society.reducer
export const { getSocieties, getSocietiesSuccess } = society.actions

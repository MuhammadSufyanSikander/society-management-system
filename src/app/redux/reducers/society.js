import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  loading: false,
  societies: [],
  errorMessage: '',
  isAddSociety: false,
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
    getSocietiesFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    insertSociety: (state, action) => {
      state.loading = true
      state.error = null
    },
    insertSocietySuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    insertSocietyFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    setSocietyValue: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
    },
  },
})

export default society.reducer
export const { insertSociety, insertSocietyFailed, insertSocietySuccess, setSocietyValue, getSocieties, getSocietiesSuccess, getSocietiesFailed } = society.actions

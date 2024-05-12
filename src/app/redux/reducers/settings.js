import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  router: null,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSetting: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
    },
  },
})

export default settingsSlice.reducer
export const { setSetting } = settingsSlice.actions

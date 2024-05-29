import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  loading: false,
  societies: [],
  society: {},
  errorMessage: '',
  isAddSociety: false,
  isEditSociety: false,
  isDeleteSociety: false,
  isAssignAdminModal: false,
  isOpenSocietyImageModal: false,
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
    getSociety: (state, action) => {
      state.loading = true
      state.error = null
    },
    getSocietySuccess: (state, action) => {
      state.loading = false
      state.error = null
      state.society = action.payload.society
    },
    getSocietyFailed: (state, action) => {
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
    modifySociety: (state, action) => {
      state.loading = true
      state.error = null
    },
    modifySocietySuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    modifySocietyFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    editSocietyImageGallery: (state, action) => {
      state.loading = true
      state.error = null
    },
    editSocietyImageGallerySuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    editSocietyImageGalleryFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    removeSociety: (state, action) => {
      state.loading = true
      state.error = null
    },
    removeSocietySuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    removeSocietyFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    assignAdminSociety: (state, action) => {
      state.loading = true
      state.error = null
    },
    assignAdminSocietySuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    assignAdminSocietyFailed: (state, action) => {
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
export const {
  editSocietyImageGallery,
  editSocietyImageGalleryFailed,
  editSocietyImageGallerySuccess,
  assignAdminSociety,
  assignAdminSocietyFailed,
  assignAdminSocietySuccess,
  getSociety,
  getSocietyFailed,
  getSocietySuccess,
  removeSociety,
  removeSocietyFailed,
  removeSocietySuccess,
  modifySociety,
  modifySocietyFailed,
  modifySocietySuccess,
  insertSociety,
  insertSocietyFailed,
  insertSocietySuccess,
  setSocietyValue,
  getSocieties,
  getSocietiesSuccess,
  getSocietiesFailed,
} = society.actions

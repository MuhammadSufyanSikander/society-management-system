import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  loading: false,
  gallery: [],
  errorMessage: '',
  isOpenAddImageModal: false,
  isOpenDeleteImageModal: false,
}

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    getGallery: (state, action) => {
      state.loading = true
      state.error = null
    },
    getGallerySuccess: (state, action) => {
      state.loading = false
      state.error = null
      state.gallery = action.payload.gallery
    },
    getGalleryFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    saveGalleryImage: (state, action) => {
      state.loading = true
      state.error = null
    },
    saveGalleryImageSuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    saveGalleryImageFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    deleteGalleryImage: (state, action) => {
      state.loading = true
      state.error = null
    },
    deleteGalleryImageSuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    deleteGalleryImageFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    setGalleryValue: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
    },
  },
})

export default gallerySlice.reducer
export const {
  deleteGalleryImage,
  deleteGalleryImageFailed,
  deleteGalleryImageSuccess,
  getGallery,
  getGalleryFailed,
  getGallerySuccess,
  setGalleryValue,
  saveGalleryImage,
  saveGalleryImageFailed,
  saveGalleryImageSuccess,
} = gallerySlice.actions

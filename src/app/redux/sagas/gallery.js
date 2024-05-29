import { call, put, select, takeEvery } from 'redux-saga/effects'
import {
  deleteGalleryImage,
  deleteGalleryImageFailed,
  deleteGalleryImageSuccess,
  getGallery,
  getGalleryFailed,
  getGallerySuccess,
  saveGalleryImage,
  saveGalleryImageFailed,
  saveGalleryImageSuccess,
  setGalleryValue,
} from '../reducers/gallery'
import { gallery } from '@/app/apiMethod/gallery'
import { firebaseStorage } from '@/app/apiMethod/storage'
import toast from 'react-hot-toast'

function* fetchGallery(action) {
  try {
    const response = yield call(gallery().fetchGallery)
    yield put(getGallerySuccess({ gallery: response.data.gallery }))
  } catch (error) {
    toast.error(error?.response?.data?.message ?? error.message)

    yield put(getGalleryFailed({ error }))
  }
}

function* postGalleryImage(action) {
  try {
    const { data } = action.payload

    const url = yield call(firebaseStorage().uploadImage, { collectionName: 'gallery', file: data.image })

    data.image = url

    yield call(gallery().postGalleryImage, data)

    yield put(saveGalleryImageSuccess())

    yield put(getGallery())

    yield put(setGalleryValue({ key: 'isOpenAddImageModal', value: false }))
    toast.success('Image added successfully')
  } catch (error) {
    toast.error(error?.response?.data?.message ?? error.message)

    yield put(saveGalleryImageFailed({ error }))
  }
}

function* removeGalleryImage(action) {
  try {
    const { data } = action.payload

    yield call(gallery().removeGalleryImage, data)

    yield put(deleteGalleryImageSuccess())

    yield put(getGallery())

    yield put(setGalleryValue({ key: 'isOpenDeleteImageModal', value: false }))
    toast.success('Image deleted successfully')
  } catch (error) {
    toast.error(error?.response?.data?.message ?? error.message)

    yield put(deleteGalleryImageFailed({ error }))
  }
}

export function* gallerySaga() {
  yield takeEvery(getGallery.type, fetchGallery)
  yield takeEvery(saveGalleryImage.type, postGalleryImage)
  yield takeEvery(deleteGalleryImage.type, removeGalleryImage)
}

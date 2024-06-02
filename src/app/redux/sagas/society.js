import { call, put, takeEvery } from 'redux-saga/effects'
import { society } from '@/app/apiMethod/society'
import {
  assignAdminSociety,
  assignAdminSocietyFailed,
  assignAdminSocietySuccess,
  editSocietyImageGallery,
  editSocietyImageGalleryFailed,
  editSocietyImageGallerySuccess,
  getSocieties,
  getSocietiesFailed,
  getSocietiesSuccess,
  getSociety,
  getSocietyFailed,
  getSocietyInfoCounts,
  getSocietyInfoCountsFailed,
  getSocietyInfoCountsSuccess,
  getSocietySuccess,
  insertSociety,
  insertSocietyFailed,
  insertSocietySuccess,
  modifySociety,
  modifySocietyFailed,
  modifySocietySuccess,
  removeSociety,
  removeSocietyFailed,
  removeSocietySuccess,
  setSocietyValue,
} from '../reducers/society'
import toast from 'react-hot-toast'
import { uploadImage } from '@/app/firebase/storage'
import { firebaseStorage } from '@/app/apiMethod/storage'

function* fetchSocieties(action) {
  try {
    const { searchQuery } = action.payload || {}

    const response = yield call(society().getSocieties, searchQuery)

    yield put(getSocietiesSuccess({ societies: response.data.societies }))
  } catch (error) {
    yield put(getSocietiesFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* fetchSociety(action) {
  try {
    const { data } = action.payload

    const response = yield call(society().getSociety, data)

    yield put(getSocietySuccess({ society: response.data.society }))
  } catch (error) {
    yield put(getSocietyFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* addSociety(action) {
  try {
    const { data, setInputFields } = action.payload

    const url = yield call(firebaseStorage().uploadImage, { collectionName: 'society', file: data.image })

    data.image = url

    const groupMemberImage = yield call(firebaseStorage().uploadImage, { collectionName: 'society', file: data?.groupMemberImage })

    data.groupMemberImage = groupMemberImage

    const response = yield call(society().addSociety, data)

    console.log('error found in try')
    yield put(getSocieties())

    yield put(insertSocietySuccess({}))

    yield put(setSocietyValue({ key: 'isAddSociety', value: false }))

    setInputFields && setInputFields({})

    toast.success('Society added')
  } catch (error) {
    yield put(insertSocietyFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* editSociety(action) {
  try {
    const { data, setInputFields } = action.payload
    if (data?.image) {
      const url = yield call(firebaseStorage().uploadImage, { collectionName: 'society', file: data.image })

      data.image = url
    }
    console.log('groupMemberImagegroupMemberImage:', data)
    if (data?.groupMemberImage) {
      const groupMemberImage = yield call(firebaseStorage().uploadImage, { collectionName: 'society', file: data?.groupMemberImage })

      data.groupMemberImage = groupMemberImage
    }

    const response = yield call(society().editSociety, data)

    yield put(getSocieties())

    yield put(modifySocietySuccess({}))

    yield put(setSocietyValue({ key: 'isAddSociety', value: false }))
    yield put(setSocietyValue({ key: 'isEditSociety', value: false }))
    setInputFields && setInputFields({})
    toast.success('Society Edited')
  } catch (error) {
    yield put(modifySocietyFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* deleteSociety(action) {
  try {
    const { data, setInputFields } = action.payload

    yield call(society().deleteSociety, data)

    yield put(getSocieties())

    yield put(removeSocietySuccess({}))

    yield put(setSocietyValue({ key: 'isDeleteSociety', value: false }))
    setInputFields && setInputFields({})
    toast.success('Society Deleted')
  } catch (error) {
    yield put(removeSocietyFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* updateSocietyGallery(action) {
  try {
    const { data, setInputFields } = action.payload || {}
    let urls
    if (data?.societyFiles) {
      urls = yield call(firebaseStorage().uploadImages, { collectionName: 'society', files: data.societyFiles })
    }

    console.log('adarqwe :', !data?.societyFiles, data?.societyImages?.length > 0 || data?.societyImages)

    let societyImages

    if (!data?.societyFiles && (data?.societyImages?.length > 0 || data?.societyImages)) {
      societyImages = [...data?.societyImages]
    } else if (data?.societyImages) {
      console.log('error :')
      societyImages = [...data?.societyImages, ...urls]
    } else {
      societyImages = urls
    }

    data.galleryImages = societyImages

    yield call(society().editSociety, data)

    yield put(getSocieties())

    yield put(editSocietyImageGallerySuccess({}))

    yield put(setSocietyValue({ key: 'isOpenSocietyImageModal', value: false }))

    setInputFields && setInputFields({})

    toast.success('Society Gallery Updated Successfully')
  } catch (error) {
    yield put(editSocietyImageGalleryFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* assignAdminToSociety(action) {
  try {
    const { data, setInputFields } = action.payload || {}

    yield call(society().assignAdminToSociety, data)

    yield put(getSocieties())

    yield put(assignAdminSocietySuccess({}))

    yield put(setSocietyValue({ key: 'isAssignAdminModal', value: false }))
    setInputFields && setInputFields({})
    toast.success('Admin Assigned Successfully')
  } catch (error) {
    yield put(assignAdminSocietyFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* fetchSocietyInfoCounts(action) {
  try {
    const { data } = action.payload || {}

    const response = yield call(society().fetchSocietyInfoCounts, data)

    yield put(getSocietyInfoCountsSuccess({ usersCount: response.data.users_count, eventsCount: response.data.events_count }))
  } catch (error) {
    yield put(getSocietyInfoCountsFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

export function* societySaga() {
  yield takeEvery(getSocieties.type, fetchSocieties)
  yield takeEvery(getSociety.type, fetchSociety)
  yield takeEvery(insertSociety.type, addSociety)
  yield takeEvery(modifySociety.type, editSociety)
  yield takeEvery(removeSociety.type, deleteSociety)
  yield takeEvery(assignAdminSociety.type, assignAdminToSociety)
  yield takeEvery(editSocietyImageGallery.type, updateSocietyGallery)
  yield takeEvery(getSocietyInfoCounts.type, fetchSocietyInfoCounts)
}

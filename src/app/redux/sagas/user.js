import { call, put, takeEvery } from 'redux-saga/effects'
import toast from 'react-hot-toast'
import { user } from '@/app/apiMethod/user'
import {
  getOwners,
  getOwnersFailed,
  getOwnersSuccess,
  getUsers,
  getUsersFailed,
  getUsersSuccess,
  modifyUser,
  modifyUserFailed,
  modifyUserSuccess,
  sendEmailFailed,
  sendEmailSuccess,
  sendEmail as sendEmailAction,
} from '../reducers/user'
import { email } from '@/app/apiMethod/email'

function* fetchUsers(action) {
  try {
    const {
      data: { searchQuery, status, society },
    } = action.payload || {}
    const response = yield call(user().fetchUsers, searchQuery, status, society)

    yield put(getUsersSuccess({ users: response?.data?.users || [] }))
  } catch (error) {
    yield put(getUsersFailed({ error }))
    toast.error(error?.response?.data?.message ?? error.message)
  }
}

function* fetchOwners(action) {
  try {
    const response = yield call(user().fetchOwners)

    console.log('owennrqnweqwe :', response)

    yield put(getOwnersSuccess({ owners: response?.data?.owners || [] }))
  } catch (error) {
    yield put(getOwnersFailed({ error }))
    toast.error(error?.response?.data?.message ?? error.message)
  }
}

function* updateUser(action) {
  try {
    const { data } = action.payload
    const response = yield call(user().updateUser, data)
    yield put(modifyUserSuccess())

    yield put(getUsers())
  } catch (error) {
    yield put(modifyUserFailed({ error }))
    toast.error(error?.response?.data?.message ?? error.message)
  }
}

function* sendEmail(action) {
  try {
    const { data } = action.payload
    const response = yield call(email().sendEmail, data)

    yield put(sendEmailSuccess())

    toast.success('Email sent successfully')
  } catch (error) {
    yield put(sendEmailFailed({ error }))
    toast.error(error?.response?.data?.message ?? error.message)
  }
}

export function* userSaga() {
  yield takeEvery(getUsers.type, fetchUsers)
  yield takeEvery(getOwners.type, fetchOwners)
  yield takeEvery(modifyUser.type, updateUser)
  yield takeEvery(sendEmailAction.type, sendEmail)
}

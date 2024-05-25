import { call, put, takeEvery } from 'redux-saga/effects'
import toast from 'react-hot-toast'
import { user } from '@/app/apiMethod/user'
import { getUsers, getUsersFailed, getUsersSuccess, modifyUser, modifyUserFailed, modifyUserSuccess } from '../reducers/user'

function* fetchUsers(action) {
  try {
    const response = yield call(user().fetchUsers)
    yield put(getUsersSuccess({ users: response.data.users }))
  } catch (error) {
    yield put(getUsersFailed({ error }))
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

export function* userSaga() {
  yield takeEvery(getUsers.type, fetchUsers)
  yield takeEvery(modifyUser.type, updateUser)
}

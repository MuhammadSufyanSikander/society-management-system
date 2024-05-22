import { call, put, select, takeEvery } from 'redux-saga/effects'
import { login, register, success } from '../reducers/auth'
import routes from '@/app/routes'
import { auth } from '@/app/apiMethod/auth'

function* signin(action) {
  // const { router } = yield select(state => state.settings)
  try {
    const { email, password } = action.payload

    const response = yield call(auth().login, email, password)
    yield put(success({ token: response.data.token, userInfo: response.data.data }))
    // router.push(routes.REGISTER)
  } catch (error) {
    console.log('error login', error)
  }
}

function* signup(action) {
  // const { router } = yield select(state => state.settings)
  try {
    const { data } = action.payload

    const response = yield call(auth().register, data)
    yield put(success({}))
    // router.push(routes.REGISTER)
  } catch (error) {
    console.log('error login', error)
  }
}

export function* authSaga() {
  yield takeEvery(login.type, signin)
  yield takeEvery(register.type, signup)
}

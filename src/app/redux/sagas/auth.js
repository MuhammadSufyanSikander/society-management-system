import { call, put, select, takeEvery } from 'redux-saga/effects'
import { login, register, setAuthValue, success } from '../reducers/auth'
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
  try {
    const { data, router } = action.payload

    const response = yield call(auth().register, data)
    yield put(success({ userInfo: response.data.user, token: response.data.token }))
    yield put(setAuthValue({ key: 'step', value: 1 }))
    router.push(routes.HOME)
  } catch (error) {
    console.log('error login', error)
  }
}

export function* authSaga() {
  yield takeEvery(login.type, signin)
  yield takeEvery(register.type, signup)
}

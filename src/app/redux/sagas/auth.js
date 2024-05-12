import { call, put, select, takeEvery } from 'redux-saga/effects'
import { login, success } from '../reducers/auth'
import routes from '@/app/routes'

function* signin(action) {
  // const { router } = yield select(state => state.settings)
  try {
    const { router } = action.payload
    // yield put(success())
    router.push(routes.REGISTER)
  } catch (error) {
    console.log('error login', error)
  }
}

export function* authSaga() {
  yield takeEvery(login.type, signin)
}

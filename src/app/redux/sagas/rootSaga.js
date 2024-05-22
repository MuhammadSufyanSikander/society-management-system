import { all } from 'redux-saga/effects'
import { authSaga } from './auth'
import { departmentSaga } from './department'

export function* rootSaga() {
  yield all([authSaga(), departmentSaga()])
}

import { all } from 'redux-saga/effects'
import { authSaga } from './auth'
import { departmentSaga } from './department'
import { societySaga } from './society'

export function* rootSaga() {
  yield all([authSaga(), departmentSaga(), societySaga()])
}

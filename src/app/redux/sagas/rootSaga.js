import { all } from 'redux-saga/effects'
import { authSaga } from './auth'
import { departmentSaga } from './department'
import { societySaga } from './society'
import { userSaga } from './user'

export function* rootSaga() {
  yield all([authSaga(), departmentSaga(), societySaga(), userSaga()])
}

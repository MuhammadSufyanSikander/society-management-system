import { all } from 'redux-saga/effects'
import { authSaga } from './auth'
import { departmentSaga } from './department'
import { societySaga } from './society'
import { userSaga } from './user'
import { eventSaga } from './events'

export function* rootSaga() {
  yield all([authSaga(), departmentSaga(), societySaga(), userSaga(), eventSaga()])
}

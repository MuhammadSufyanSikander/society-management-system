import { call, put, select, takeEvery } from 'redux-saga/effects'
import { getDepartments, getDepartmentsSuccess } from '../reducers/department'
import { department } from '@/app/apiMethod/department'

function* getDepartmentItems(action) {
  try {
    const response = yield call(department().getDepartments)
    console.log('asdasds123', response)
    yield put(getDepartmentsSuccess({ departments: response.data.departments }))
    // router.push(routes.REGISTER)
  } catch (error) {
    console.log('error login', error)
  }
}

export function* departmentSaga() {
  yield takeEvery(getDepartments.type, getDepartmentItems)
}

import { call, put, takeEvery } from 'redux-saga/effects'
import { society } from '@/app/apiMethod/society'
import { getSocieties, getSocietiesSuccess } from '../reducers/society'

function* fetchSocieties(action) {
  try {
    const response = yield call(society().getSocieties)
    yield put(getSocietiesSuccess({ societies: response.data.societies }))
  } catch (error) {
    console.log('error login', error)
  }
}

export function* societySaga() {
  yield takeEvery(getSocieties.type, fetchSocieties)
}

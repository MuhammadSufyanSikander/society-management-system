import { call, put, select, takeEvery } from 'redux-saga/effects'
import { failed, login, register, setAuthValue, success } from '../reducers/auth'
import routes from '@/app/routes'
import { auth } from '@/app/apiMethod/auth'
import toast from 'react-hot-toast'
import { firebaseStorage } from '@/app/apiMethod/storage'
import { email } from '@/app/apiMethod/email'

function* signin(action) {
  try {
    const {
      data: { email, password },
      router,
    } = action.payload

    const response = yield call(auth().login, email, password)
    yield put(success({ token: response.data.token, userInfo: response.data.user }))
    router.push(routes.HOME)
    toast.success('Login successful')
  } catch (error) {
    yield put(failed({ error }))
    toast.error(error?.response?.data?.message ?? error.message)
  }
}

function* signup(action) {
  try {
    const { data, router } = action.payload

    const url = yield call(firebaseStorage().uploadImage, { collectionName: 'users', file: data.image })

    data.image = url

    const response = yield call(auth().register, data)
    yield put(success({ userInfo: response.data.user, token: response.data.token }))
    yield put(setAuthValue({ key: 'step', value: 1 }))
    router.push(routes.HOME)

    yield call(
      email().sendEmail({
        from: 'zaidsaleem.tbox@gmail.com',
        subject: 'Account successfully registered',
        recipients: [data.email],
        text: 'Your account is successfully created. The admin will verify your accoount and you will be good to go.',
      }),
    )
  } catch (error) {
    toast.error(error?.response?.data?.message ?? error.message)
  }
}

export function* authSaga() {
  yield takeEvery(login.type, signin)
  yield takeEvery(register.type, signup)
}

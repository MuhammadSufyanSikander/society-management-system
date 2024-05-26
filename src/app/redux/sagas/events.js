import { call, put, select, takeEvery } from 'redux-saga/effects'
import toast from 'react-hot-toast'
import { event } from '@/app/apiMethod/event'
import {
  getEvent,
  getEventFailed,
  getEventSuccess,
  getEvents,
  getEventsFailed,
  getEventsSuccess,
  insertEvent,
  insertEventFailed,
  insertEventSuccess,
  modifyEvent,
  modifyEventFailed,
  modifyEventSuccess,
  removeEvent,
  removeEventFailed,
  removeEventSuccess,
  setEventValue,
} from '../reducers/events'
import { firebaseStorage } from '@/app/apiMethod/storage'
import { user } from '@/app/apiMethod/user'
import { email } from '@/app/apiMethod/email'

function* addEvent(action) {
  const { userInfo, token } = yield select(state => state.auth)

  try {
    const { data, setInputFields } = action.payload || {}

    const url = yield call(firebaseStorage().uploadImage, { collectionName: 'society', file: data.image })

    data.image = url

    yield call(event().addEvent, data)

    yield put(getEvents())

    yield put(insertEventSuccess({}))

    yield put(setEventValue({ key: 'isEditEventModal', value: false }))
    yield put(setEventValue({ key: 'isEventModal', value: false }))

    setInputFields && setInputFields({})

    toast.success('Event added successfully')

    if (!token) return

    const usersResponse = yield call(user().fetchUsers, '', '', data.society)

    yield call(email().sendEmail, {
      from: userInfo.email,
      subject: `New Event, Title: ${data.title}`,
      text: 'A new event added, please visit society portal.',
      recipients: usersResponse.data.users.map(user => user.email),
    })
  } catch (error) {
    yield put(insertEventFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* editEvent(action) {
  const { userInfo, token } = yield select(state => state.auth)

  try {
    const { data, setInputFields } = action.payload || {}

    if (data.image) {
      const url = yield call(firebaseStorage().uploadImage, { collectionName: 'society', file: data.image })

      data.image = url
    }

    yield call(event().editEvent, data)

    yield put(getEvents())

    yield put(modifyEventSuccess({}))

    yield put(setEventValue({ key: 'isEditEventModal', value: false }))
    yield put(setEventValue({ key: 'isEventModal', value: false }))

    setInputFields && setInputFields({})

    toast.success('Event edited successfully')

    if (!token) return

    const usersResponse = yield call(user().fetchUsers, '', '', data.society)

    yield call(email().sendEmail, {
      from: userInfo.email,
      subject: `New Event, Title: ${data.title}`,
      text: 'A new event added, please visit society portal.',
      recipients: usersResponse.data.users.map(user => user.email),
    })
  } catch (error) {
    yield put(modifyEventFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* deleteEvent(action) {
  try {
    const { data, setInputFields } = action.payload || {}

    yield call(event().deleteEvent, data)

    yield put(getEvents())

    yield put(removeEventSuccess({}))

    yield put(setEventValue({ key: 'isDeleteEventModal', value: false }))

    setInputFields && setInputFields({})

    toast.success('Event deleted successfully')
  } catch (error) {
    yield put(removeEventFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* fetchEvents(action) {
  try {
    const { searchQuery } = action.payload || {}

    const response = yield call(event().fetchEvents, searchQuery)

    yield put(getEventsSuccess({ events: response.data.events }))
  } catch (error) {
    yield put(getEventsFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

function* fetchEvent(action) {
  try {
    const { data } = action.payload || {}

    const response = yield call(event().fetchEvent, data)

    yield put(getEventSuccess({ event: response.data.event }))
  } catch (error) {
    yield put(getEventFailed({ error }))

    toast.error(error?.response?.data?.message ?? error?.message)
  }
}

export function* eventSaga() {
  yield takeEvery(insertEvent.type, addEvent)
  yield takeEvery(getEvents.type, fetchEvents)
  yield takeEvery(getEvent.type, fetchEvent)
  yield takeEvery(modifyEvent.type, editEvent)
  yield takeEvery(removeEvent.type, deleteEvent)
}

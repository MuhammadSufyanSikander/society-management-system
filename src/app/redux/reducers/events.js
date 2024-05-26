import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  loading: false,
  events: [],
  event: {},
  errorMessage: '',
  isDeleteEventModal: false,
  isEditEventModal: false,
  isEventModal: false,
}

const event = createSlice({
  name: 'event',
  initialState,
  reducers: {
    insertEvent: (state, action) => {
      state.loading = true
      state.error = null
    },
    insertEventSuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    insertEventFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    modifyEvent: (state, action) => {
      state.loading = true
      state.error = null
    },
    modifyEventSuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    modifyEventFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    removeEvent: (state, action) => {
      state.loading = true
      state.error = null
    },
    removeEventSuccess: (state, action) => {
      state.loading = false
      state.error = null
    },
    removeEventFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    getEvents: (state, action) => {
      state.loading = true
      state.error = null
    },
    getEventsSuccess: (state, action) => {
      state.loading = false
      state.error = null
      state.events = action.payload.events
    },
    getEventsFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    getEvent: (state, action) => {
      state.loading = true
      state.error = null
    },
    getEventSuccess: (state, action) => {
      state.loading = false
      state.error = null
      state.event = action.payload.event
    },
    getEventFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    setEventValue: (state, action) => {
      const { key, value } = action.payload
      state[key] = value
    },
  },
})

export default event.reducer
export const {
  getEvent,
  getEventFailed,
  getEventSuccess,
  removeEvent,
  removeEventFailed,
  removeEventSuccess,
  modifyEvent,
  modifyEventFailed,
  modifyEventSuccess,
  getEvents,
  getEventsFailed,
  getEventsSuccess,
  insertEvent,
  insertEventFailed,
  insertEventSuccess,
  setEventValue,
} = event.actions

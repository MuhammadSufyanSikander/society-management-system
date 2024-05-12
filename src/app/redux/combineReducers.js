import { combineReducers } from 'redux'
import auth from './reducers/auth'
import settings from './reducers/settings'

export default combineReducers({ auth, settings })

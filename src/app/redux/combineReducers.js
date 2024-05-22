import { combineReducers } from 'redux'
import auth from './reducers/auth'
import settings from './reducers/settings'
import department from './reducers/department'

export default combineReducers({ auth, settings, department })

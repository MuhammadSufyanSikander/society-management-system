import { combineReducers } from 'redux'
import auth from './reducers/auth'
import settings from './reducers/settings'
import department from './reducers/department'
import society from './reducers/society'
import user from './reducers/user'
import event from './reducers/events'

export default combineReducers({ auth, settings, department, society, user, event })

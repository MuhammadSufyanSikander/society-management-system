import { combineReducers } from 'redux'
import auth from './reducers/auth'
import settings from './reducers/settings'
import department from './reducers/department'
import society from './reducers/society'
import user from './reducers/user'
import event from './reducers/events'
import gallery from './reducers/gallery'

export default combineReducers({ auth, settings, department, society, user, event, gallery })

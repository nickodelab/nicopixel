
import { combineReducers } from 'redux'
import { uiReducer } from '../reducers/ui'
import { userReducer } from '../reducers/user'

const globalInitialState = {
  user: userReducer,
  ui: uiReducer
}

export const appReducers = combineReducers(globalInitialState)

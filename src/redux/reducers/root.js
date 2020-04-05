
import { appReducers } from '.'
import { userReducerInitialState, LOG_OUT_USER } from './user'
import { uiReducerInitialState } from './ui'

export const rootReducer = (state, action) => {
  if (action.type === LOG_OUT_USER) {
    return appReducers({ user: userReducerInitialState, ui: uiReducerInitialState }, action)
  }

  return appReducers(state, action)
}

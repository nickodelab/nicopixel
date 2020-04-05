
import { SET_LOADER, SET_SIDEBAR_TOGGLE } from '../actions/ui'

export const uiReducerInitialState = {
  isLoading: false,
  isSidebarOpen: true
}

export function uiReducer(state = uiReducerInitialState, action) {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_SIDEBAR_TOGGLE:
      return {
        ...state,
        isSidebarOpen: action.payload
      }
    default:
      return state
  }
}

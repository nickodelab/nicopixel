
import { SET_MY_USER } from '../actions/user'

export const userReducerInitialState = false

export function userReducer(state = userReducerInitialState, action) {
  switch (action.type) {
    case SET_MY_USER:
      return {
        data: action.payload || false,
        error: false
      }

    default:
      return state
  }
}

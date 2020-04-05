
import { RETRIEVE_MY_USER, USER_ENTITY, LOG_IN_USER, LOG_IN_USER_ERROR, setMyUser } from '../../actions/user'
import { API_SUCCESS, apiRequest, API_ERROR } from '../../actions/api'
import { setError } from '../../actions/ui'

export const usersMiddleware = ({ dispatch }) => next => async action => {
  next(action)

  let actionType
  switch (action.type) {
    case LOG_IN_USER:
      dispatch(apiRequest('POST', '/user/login', null, LOG_IN_USER, LOG_IN_USER_ERROR))
      break

    case `${USER_ENTITY} ${API_SUCCESS}`:
      actionType = action.payload.meta.actionType

      if (actionType === LOG_IN_USER) {
        const { data: token } = action.payload
        // eslint-disable-next-line no-undef
        sessionStorage.token = token
      }

      if (actionType === RETRIEVE_MY_USER) {
        const { data: user } = action.payload
        dispatch(setMyUser(user))
      }
      break

    case `${USER_ENTITY} ${API_ERROR}`:
      actionType = action.payload.meta.actionType

      if (actionType === RETRIEVE_MY_USER) {
        const error = action.payload.data
        dispatch(setError(error))
      }
      break

    default:
      break
  }
}

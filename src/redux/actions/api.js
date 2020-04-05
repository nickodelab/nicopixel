
export const API_REQUEST = 'API_REQUEST'
export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'

export const apiRequest = (body, method, entity, command, params) => ({
  type: `${entity} ${API_REQUEST}`,
  payload: {
    data: body,
    meta: { method, entity, command, params }
  }
})

export const apiSuccess = (response, entity, actionType) => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: {
    data: response,
    meta: { entity, actionType }
  }
})

export const apiError = (error, entity, actionType) => ({
  type: `${entity} ${API_ERROR}`,
  payload: {
    data: error,
    meta: { entity, actionType }
  }
})

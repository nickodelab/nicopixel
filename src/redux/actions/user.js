
export const USER_ENTITY = '[ user ]'
export const LOG_IN_USER = `${USER_ENTITY} LOG_IN_USER`
export const LOG_OUT_USER = `${USER_ENTITY} LOG_OUT_USER`
export const LOG_IN_USER_ERROR = `${USER_ENTITY} LOG_IN_USER_ERROR`
export const RETRIEVE_MY_USER = `${USER_ENTITY} RETRIEVE_MY_USER`
export const SET_MY_USER = `${USER_ENTITY} SET_MY_USER`

export const setMyUser = userData => ({
  type: `${USER_ENTITY} ${SET_MY_USER}`,
  payload: userData
})

export const retrieveMyUser = () => ({
  type: LOG_IN_USER
})

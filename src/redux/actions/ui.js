
export const UI_ENTITY = `[ ui ]`
export const SET_ERROR = `${UI_ENTITY} SET_ERROR`

export const SET_LOADER = `${UI_ENTITY} SET_LOADER`
export const SET_SIDEBAR_TOGGLE = `${UI_ENTITY} SET_SIDEBAR_TOGGLE`

export const setLoader = isLoading => ({
  type: `${UI_ENTITY} ${SET_LOADER}`,
  payload: isLoading
})

export const setSidebarToggle = toggle => ({
  type: `${UI_ENTITY} ${SET_SIDEBAR_TOGGLE}`,
  payload: toggle
})

export const setError = (error, entity) => ({
  type: `${entity} ${SET_ERROR}`,
  payload: error
})

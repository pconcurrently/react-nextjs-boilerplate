import { actionTypes } from './actionTypes'
import { initialState } from './initialState'
import { State, Action } from './types'

const appReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      }
    case actionTypes.SET_IS_MOBILE_SSR:
      return {
        ...state,
        isMobileSsr: action.payload.isMobileSsr,
      }
    default:
      return state
  }
}

export { appReducer }

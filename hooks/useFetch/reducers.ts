type Action = {
  type: string
  payload?: any
}

export const initialResponse = { response: null, error: null, loading: false }

const INIT = 'INIT'
const SUCCESS = 'SUCCESS'
const FAIL = 'FAIL'

export function responseReducer(state = initialResponse, action: Action) {
  switch (action.type) {
    case INIT:
      return { ...state, loading: true }
    case SUCCESS:
      return { response: action.payload, error: null, loading: false }
    case FAIL:
      return { response: null, error: action.payload, loading: false }
    default:
      return state
  }
}

export const actionTypes = { INIT, SUCCESS, FAIL }

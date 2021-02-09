export type Role = 'user' | 'admin' | 'brand_manager' | 'facility_manager'

export type State = {
  isLoggedIn: boolean
  isMobileSsr: boolean
}

export type Action = {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
}

export type Context = {
  state: State
  dispatch: (action: Action) => void
}

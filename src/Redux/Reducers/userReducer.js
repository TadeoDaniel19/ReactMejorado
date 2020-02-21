import { UPDATE_NAME } from '../Actions/userActions'

const initialState = {
  name: 'Tadeo',
  country: 'mexico'
}

const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload.name
      }
    default:
      return state
  }
}

export default reducerUser  
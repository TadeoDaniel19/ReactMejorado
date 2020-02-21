import {INCREMENT,DECREMENT} from '../Actions/counterActions'

//el reducer es una funcion pura que nos regresa el estado actual
const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default reducerCounter
import { combineReducers } from 'redux'
import counter from './counterReducer'
import user from './userReducer'

//aqui combinamos los reducers para ver el state
export default combineReducers({
  counter,
  user
})
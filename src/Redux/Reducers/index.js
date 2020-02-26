import { combineReducers } from 'redux'
import counter from './counterReducer'
import user from './userReducer'
import {reducer as formReducer} from 'redux-form'
import todo from './todoReducer'
//aqui combinamos los reducers para ver el state
export default combineReducers({
  counter,
  user, 
  form: formReducer,
  todo
})
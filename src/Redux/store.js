import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Reducers'

const logger = (store) => (next) => (action) => {
  console.log('Ha ocurrido una nueva accion: ---->', action)
  next(action)
}

let middleware = applyMiddleware(logger)
let tools = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//el store es el almacenamiento de nuestro estado.
const store = createStore(rootReducer, tools)

//Action creators

store.subscribe(() => {
  console.log(store.getState())
})

export default store 
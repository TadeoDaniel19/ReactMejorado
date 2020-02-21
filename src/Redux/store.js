import { createStore} from 'redux'
import rootReducer from './Reducers'

//el store es el almacenamiento de nuestro estado.
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//Action creators

store.subscribe(() => {
  console.log(store.getState())
})

export default store 
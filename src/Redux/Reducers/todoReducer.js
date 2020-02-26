import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../Actions/todoActions'

const initialState = {
  todos: [
    {
      text: 'Hacer Hendrix',
      id: '0000000000001',
      checked: false
    }
  ]
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              checked: !todo.checked
            }
          }
          return todo
        })
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      }
    default:
      return state
  }
}

export default todo
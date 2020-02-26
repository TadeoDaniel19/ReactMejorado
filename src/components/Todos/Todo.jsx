import React from 'react'

const Todo = ({todo,updateTodo,deleteTodo}) => (
    <li
        onClick={() => {
          updateTodo(todo)
        }}
      >
        <input 
          type='checkbox' 
          checked={todo.checked}
          onChange={() => {
            updateTodo(todo)
          }} 
        />
        <button
          onClick={() => {
            deleteTodo(todo)
          }}
        >
          X
        </button>
        {todo.text}
      </li>
)
export default Todo
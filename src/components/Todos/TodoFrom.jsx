import React from 'react'

const TodoForm = ({onSubmit}) => {
 return (
    <form onSubmit={onSubmit}>
    <input type='text' placeholder='añadir una tarea' />
    <button> Agregar </button>
  </form>
 )
}

export default TodoForm
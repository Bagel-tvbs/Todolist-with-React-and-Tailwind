import React from 'react'

const List = ({todo,updateTodo}) => {
    
  return (
<li className="py-4" key={ todo.id } data-id={ todo.id } >
    <h2></h2>
        <label className={ todo.status ? 'line-through' : ''} >
          <input onChange={ updateTodo } type="checkbox" className="mr-2" data-id={ todo.id } checked={ todo.status }/>
          { todo.name }
        </label>
      </li>
  )
}

export default List
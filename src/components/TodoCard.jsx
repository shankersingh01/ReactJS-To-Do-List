import React from 'react'

export default function TodoCard(props) {
    const {children, handleDelTodos, index, handleEditTodos} = props
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={()=>{
                handleEditTodos(index)
            }}>
            <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={()=>{
                    handleDelTodos(index)
                }}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>          
    </li>
  )
}


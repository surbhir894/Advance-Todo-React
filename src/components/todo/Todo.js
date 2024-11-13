import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import'./Todo.css';

function Todo() {
  return (
    <>
  <div className='todo-app'>
   <h1>My Todo App</h1>
  </div>
  <TodoForm/>
  <TodoList/>
    </>
  )
}

export default Todo
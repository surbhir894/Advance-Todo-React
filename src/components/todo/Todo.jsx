import React from 'react'
import Button from './Button'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './Todo.css';
import Modal from './Modal';
import ConfirmationModal from './ConfirmationModal';

function Todo() {
  return (
    <>
      <div className='todo-app'>
        <div className="todo-header">
          <h1>My Todo App</h1>
          <Button>Add Task</Button>
        </div>
    
        <TodoList />
      </div>
      {/* Add Task Modal  */}
      <Modal  open ={false}
       heading={"Add task Form"}
       >
         <TodoForm/>
      </Modal>
      {/* Confirmation Modal  */}
     {/* <ConfirmationModal title={"task"}/> */}
    </>
  )
}

export default Todo

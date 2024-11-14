import React from 'react'
import './Todo.css';
import Button from './Button';


function TodoForm() {
  return (
    <form onSubmit={() =>console.log('form submitted')}
    className='todo-form'>
      <div className='field-group'>
        <label>Task</label>
        <input type='text' value='' name='title'
        placeholder='Enter Your Task Here' />
      </div>
      <div className='field-group'>
        <label>Description</label>
        <textarea placeholder='Enter Your Task Details'> </textarea>
      </div>
      <div className="todo-form-actions">
        <Button>Submit</Button>
      </div>
    </form>
  )
}

export default TodoForm
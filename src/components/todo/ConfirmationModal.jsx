import React from 'react'
import './Todo.css';
import Modal from './Modal';
import Button from './Button';

function ConfirmationModal({title}) {
  return (
    <>
     
      {/* Confirmation Modal  */}
      <Modal  open ={true}
       heading={"Confirmation Form"}
       footerComponent={<div className='delete-modal-buttons'>
        <Button>Close</Button>
        <Button className={"btn-error"}>Delete</Button>
       </div>}
       >
       Are you sure you want to delete {title}?
      </Modal>
    </>
  )
}

export default ConfirmationModal

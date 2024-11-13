import React from 'react'
import { Tooltip } from 'react-tooltip'
import { PiCheck, PiPencil,PiX } from "react-icons/pi";

function TodoList() {
    return (
        <>
        <div className='todo-list'>
            <Tooltip id="button-check-id" place="left"
                content="mark-as-completed" />
            <Tooltip id="button-edit-id" place="top"
                content="Edit" />
             <Tooltip id="button-delete-id" place="top"
                content="Delete" />
                
                

            <ul>
                <li>
                    surbhi rajput
                    <div className='todo-action'>
                        <button data-tooltip-id="button-check-id">
                            <PiCheck />
                        </button>
                        <button data-tooltip-id="button-edit-id">
                            <PiPencil />
                        </button>
                        <button data-tooltip-id="button-delete-id">
                            <PiX />
                        </button>
                    </div>
                </li>
                
                <li>
                    surbhi rajput
                    <div className='todo-action'>
                        <button data-tooltip-id="button-check-id">
                            <PiCheck />
                        </button>
                        <button data-tooltip-id="button-edit-id">
                            <PiPencil />
                        </button>
                        <button data-tooltip-id="button-delete-id">
                            <PiX />
                        </button>
                    </div>
                </li>

                <li>
                    surbhi rajput
                    <div className='todo-action'>
                        <button data-tooltip-id="button-check-id">
                            <PiCheck />
                        </button>
                        <button data-tooltip-id="button-edit-id">
                            <PiPencil />
                        </button>
                        <button data-tooltip-id="button-delete-id">
                            <PiX />
                        </button>
                    </div>
                </li> 
               

                
            </ul>

        </div>
        </>
    )
}

export default TodoList
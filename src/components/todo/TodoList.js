import { tooltip } from 'react-tooltip'
import React from 'react'
import { IconName, PiCheck, PiPencil } from "react-icons/pi";

function TodoList() {
    return (
        <>
        <div className='todo-list'>
            <tooltip id="button-check-id" place="left"
                content="mark-as-completed" />
            <tooltip id="button-edit-id" place="top"
                content="Edit" />
             <tooltip id="button-delete-id" place="top"
                content="Delete" />
                

            <ul>
                <li>
                    lfgghj fgggh
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
                    lfgghj fgggh
                    <div className='todo-action'>
                        <button>
                            Mark Complete
                            <PiCheck />
                        </button>
                        <button>
                            Edit
                            <PiPencil />
                        </button>
                        <button>
                            Delete
                            <PiX />
                        </button>
                    </div>
                </li>

                <li>
                    lfgghj fgggh
                    <div className='todo-action'>
                        <button>
                            Mark Complete
                            <PiCheck />
                        </button>
                        <button>
                            Edit
                            <PiPencil />
                        </button>
                        <button>
                            Delete
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
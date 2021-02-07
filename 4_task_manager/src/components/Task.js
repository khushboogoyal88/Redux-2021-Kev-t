import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TASKS_STATUSES = ['Unstarted', 'In progress', 'Completed']

const Task = (props) => {
    
    const onStatusChange =(e)=>{
        props.onStatusChange(props.task.id, e.target.value)
    }
    
    const onDeleteTask = () => {
        props.onDeleteTask(props.task.id)
    }
    
    return (
        <div className="card mt-2">
        <form className="m-2" onChange={onStatusChange}>
        <select defaultValue={props.task.status}>
        {TASKS_STATUSES.map(status=>(
            <option value={status} key={status}>{status}</option>
            ))}
            </select>
            </form>
            
            <div>
            <h2 className="card-title mt-3 text-uppercase px-2" style={{color:'#3a4'}}>{props.task.title}</h2>
            <p className="card-text text-muted font-weight-bold px-2">{props.task.description}</p>
            <FontAwesomeIcon icon={faTrash} className='float-right m-3' style={{color: 'red', cursor: 'pointer'}} onClick={()=>onDeleteTask(props.task.id)}
            />
            </div>
            </div>
            )
        }
        
        export default Task
        
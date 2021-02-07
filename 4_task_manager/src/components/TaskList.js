import React from 'react'
import Task from './Task'

const TaskList = (props) => {
    return (
        <div style={{background: '#e9ecef'}}>
        <div className="card-header text-uppercase text-center font-weight-bold">{props.status}</div>
        {props.tasks.map(task=>(
            <Task key={task.id} task={task} onStatusChange={props.onStatusChange} onDeleteTask={props.onDeleteTask}/>
            ))}
            
            </div>
            )
        }
        
        export default TaskList
        
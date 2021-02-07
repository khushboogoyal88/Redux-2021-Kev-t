import React, {useState} from 'react';
import TaskList from './TaskList'


const TASKS_STATUSES = ['Unstarted', 'In progress', 'Completed']

const TaskPage = (props) => {
    const [cardForm, showCardForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const onChangeTitlle= (e)=>{
        setTitle(e.target.value);
    };
    
    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    
    const formToggler = ()=>{
        showCardForm(!cardForm)
    };
    
    const resetForm = () => {
        setTitle('');
        setDescription('');
        showCardForm(false);
    }
    
    const onCreateTask = (e) =>{
        e.preventDefault();
        props.onCreateTask({
            title,
            description
        })
        resetForm();
    }
    
    const renderTaskLists = () =>{
        const {tasks} = props
        return TASKS_STATUSES.map((status, id)=>{
            const statusTasks = tasks.filter(task=>task.status === status);
            return(
                <div className="col-md-3 card m-2 p-0" key={id}>
                <TaskList key={status} status={status} tasks={statusTasks} onStatusChange={props.onStatusChange} onDeleteTask={props.onDeleteTask}/>
                </div>
                )
            })
        }
        
        return (
            <div className="container my-5">
            <div className="jumbotron py-3">
            <div className="row">
            <div className="col-md-2">
            <button className="btn btn-success m-3" onClick={formToggler}>+</button>
            </div>
            <div className="col-md-10">
            <div className="display-4 text-center">
            KANBAN BOARD
            </div>
            </div>
            </div>
            {cardForm && 
                <form onSubmit={onCreateTask}>
                <div className="form-group">
                <input type="text" className="form-control" onChange={onChangeTitlle} placeholder="Task Title" />
                </div>
                <div className="form-group">
                <textarea type="text" className="form-control" onChange={onChangeDescription} placeholder="Task Description" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>}
                
                </div>
                <div className="row d-flex justify-content-center position-relative" style={{background: '#e9ecef'}}>
                {renderTaskLists()}
                </div>
                </div>
                )
            }
            
            export default TaskPage
            
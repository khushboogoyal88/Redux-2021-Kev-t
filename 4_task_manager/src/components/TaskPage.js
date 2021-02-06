import React, {useState} from 'react';

const TASK_STATUSES = ['Unstarted', 'In progress', 'Completed']

const TaskPage = () => {
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
    
    const renderTaskLists = () =>{
        
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
        Task Manager
        </div>
        </div>
        </div>
        {cardForm && 
            <form>
            <div className="form-group">
            <input type="text" className="form-control" onChange={onChangeTitlle} placeholder="Task Title" />
            </div>
            <div className="form-group">
            <textarea type="text" className="form-control" onChange={onChangeDescription} placeholder="Task Description" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>}
            
            </div>
            </div>
            )
        }
        
        export default TaskPage
        
import'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {connect} from 'react-redux';
import TaskPage from './components/TaskPage'
import { editTask, createTask, deleteTask } from './actions';

function App(props) {
  
  const onStatusChange = (id,status) =>{
    props.dispatch(editTask(id, {status}))
  }
  
  const onCreateTask = ({title, description})=>{
    props.dispatch(createTask({title, description}))
  }
  
  const onDeleteTask = (id) =>{
    props.dispatch(deleteTask(id))
  }
  return (
    <>
    <TaskPage tasks={props.tasks} 
    onStatusChange={onStatusChange} 
    onCreateTask={onCreateTask}
    onDeleteTask={onDeleteTask}
    />
    </>
    );
  }
  
  const mapStateToProps = state =>{
    return{
      tasks: state.tasks
    }
  }
  export default connect(mapStateToProps)(App);
  
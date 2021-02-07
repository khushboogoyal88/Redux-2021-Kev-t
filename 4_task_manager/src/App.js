import'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {connect} from 'react-redux';
import TaskPage from './components/TaskPage'
import { editTask, createTask } from './actions';

function App(props) {
  
  const onStatusChange = (id,status) =>{
    props.dispatch(editTask(id, {status}))
  }
  
  const onCreateTask = ({title, description})=>{
    props.dispatch(createTask({title, description}))
  }
  return (
    <>
    <TaskPage tasks={props.tasks} 
    onStatusChange={onStatusChange} 
    onCreateTask={onCreateTask}/>
    </>
    );
  }
  
  const mapStateToProps = state =>{
    return{
      tasks: state.tasks
    }
  }
  export default connect(mapStateToProps)(App);
  
import { EDIT_TASK } from "../actions/types";
import { CREATE_TASK } from "../actions/types";

const initialState = [
    // {
    //     id:1,
    //     title: 'Learn React JS',
    //     description: 'Practise More',
    //     status: "Unstarted"
    // },
    // {
    //     id: 2,
    //     title: 'Learn Redux JS',
    //     description: 'Practise More',
    //     status: "In progress"
    // },
    // {
    //     id: 3,
    //     title: 'Learn MERN Stack',
    //     description: 'Practise More',
    //     status: "Completed"
    // }
]

const tasks = (state={tasks:initialState}, action)=>{
    const {payload} = action;
    switch(action.type){
        case EDIT_TASK:{
            return{
                tasks: state.tasks.map(task => {
                    if(task.id ===payload.id){
                        return Object.assign({}, task, payload.params);
                    } 
                    return task;
                }),
            };            
        }
        case CREATE_TASK: {
            return {
                tasks: state.tasks.concat(action.payload)
            };
        };
        default: return state;
    }
    
};
export default tasks;

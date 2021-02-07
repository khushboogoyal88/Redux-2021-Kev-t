import { EDIT_TASK } from "./types";
import { CREATE_TASK } from "./types";
import { DELETE_TASK } from "./types";

export const editTask = (id, params= {})=>{
    return{
        type: EDIT_TASK,
        payload:{
            id,
            params
        }
    };
    
};

export const createTask = ({title, description})=>{
    return {
        type: CREATE_TASK,
        payload: {
            id: Math.floor(Math.random() * 100000000) + 1,
            title,
            description,
            status:"Unstarted"
        }
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id,
    }
}
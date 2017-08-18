/**
 * Created by willstreeter on 8/14/17.
 */
import { createAction, Action } from 'redux-actions';
import * as ActionTypes from '../';
import {TodoEntity} from '../'

const addToDo=createAction(
     ActionTypes.ADD_TODO,
    (description:string) =>(description)

);

const deleteToDo=createAction(
     ActionTypes.DELETE_TODO,
    (todoEntity:TodoEntity) =>(todoEntity)

);

const editToDo=createAction(
     ActionTypes.EDIT_TODO,
    (te:TodoEntity, text:string) =>({todoEntity:te, definition:text})
);

const completeToDo=createAction(
     ActionTypes.COMPLETE_TODO,
    (te:TodoEntity, state:boolean) =>({todoEntity:te, completed:state})
);


const completeAll=createAction(
     ActionTypes.COMPLETE_ALL,
    () => {}
);


const clearCompleted=createAction(
     ActionTypes.CLEAR_COMPLETED,
    () => {}
);

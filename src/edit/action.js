import * as actionTypes from './actionTypes';

let nextTodoId = 0;

export function addTodo(text) {
  return function(dispatch) {
    let id = nextTodoId++;
    let item = text;
    let completed = false;
    dispatch({
      type: actionTypes.ADD_TODO,
      todoItem: {
        id,
        item,
        completed,
      },
    });
  };
}

export function toggleTodo(id) {
  return function(dispatch) {
    console.log(`toggle_id:${id}`);
    dispatch({
      type: actionTypes.TOGGLE_TODO,
      toggle_id: id,
    });
  };
}

import * as actionTypes from './actionTypes';

let nextTodoId = 0;

export function addTodo(text) {
  return function(dispatch) {
    let item = text;
    let completed = false;
    dispatch({
      type: actionTypes.ADD_TODO,
      todoItem: {
        item,
        completed,
      },
    });
  };
}

export function toggleTodo(id) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.TOGGLE_TODO,
      toggle_id: id,
    });
  };
}

export function deleteTodo(id) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.DELETE_TODO,
      delete_id: id,
    });
  };
}

export function updateTodo(changeList) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.UPDATE_TODO,
      changeList: changeList,
    });
  };
}

import * as actionTypes from './actionTypes';

const todoItem = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      action.todoItem.id = state.length;
      state.push(action.todoItem);
      return state;
    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.toggle_id
          ? {...todo, completed: !todo.completed}
          : todo,
      );
    case actionTypes.DELETE_TODO:
      state.forEach(function(item, index, array) {
        if (array[index].id === action.delete_id) {
          state.splice(index, 1);
        }
      });
      return state;
    case actionTypes.UPDATE_TODO:
      for (let i = 0; i < action.changeList.length; i++) {
        let change = action.changeList[i];
        for (let j = 0; j < state.length; j++) {
          let todo = state[j];
          if (todo.id === change.id) {
            if (change.hasOwnProperty('newItem')) {
              todo.item = change.newItem;
            }
            if (change.hasOwnProperty('newCategroy')) {
              todo.tag = change.newCategroy;
            }
            break;
          }
        }
      }
      for (let j = 0; j < state.length; j++) {
        state[j].id = j;
      }
      return state;
    default:
      return state;
  }
};

export default todoItem;

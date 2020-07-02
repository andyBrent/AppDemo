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
      return state.map(todo =>
        todo.id > action.delete_id ? {...todo, id: todo.id - 1} : todo,
      );
    case actionTypes.UPDATE_TODO:
      for (var j = 0; j < action.changeList.length; j++) {
        state[action.changeList[j].id].item = action.changeList[j].newItem;
      }
      return state;
    default:
      return state;
  }
};

export default todoItem;

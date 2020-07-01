import * as actionTypes from './actionTypes';

const todoItem = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      state.push(action.todoItem);
      return state;
    case actionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.toggle_id
          ? {...todo, completed: !todo.completed}
          : todo,
      );
    default:
      return state;
  }
};

export default todoItem;

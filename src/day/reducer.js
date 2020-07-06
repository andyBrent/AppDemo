import * as actionTypes from './actionTypes';

const memorialDay = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_DAY:
      action.memorialDay.id = state.length;
      state.push(action.memorialDay);
      return state;
    case actionTypes.UPDATE_DAY:
      for (let i = 0; i < action.changeList.length; i++) {
        let change = action.changeList[i];
        for (let j = 0; j < state.length; j++) {
          let todo = state[j];
          if (todo.id === change.id) {
            if (change.hasOwnProperty('newThing')) {
              todo.thing = change.newThing;
              todo.time = change.newTime;
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
    case actionTypes.DELETE_DAY:
      state.forEach(function(item, index, array) {
        if (array[index].id === action.delete_id) {
          state.splice(index, 1);
        }
      });
      return state;
    default:
      return state;
  }
};

export default memorialDay;

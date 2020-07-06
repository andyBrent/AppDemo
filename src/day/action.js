import * as actionTypes from './actionTypes';

export function addDay(thing, time, tag) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.ADD_DAY,
      memorialDay: {
        thing,
        time,
        tag,
      },
    });
  };
}

export function deleteDay(id) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.DELETE_DAY,
      delete_id: id,
    });
  };
}

export function updateDay(changeList) {
  return function(dispatch) {
    dispatch({
      type: actionTypes.UPDATE_DAY,
      changeList: changeList,
    });
  };
}

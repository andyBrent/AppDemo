import * as actionTypes from './actionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_IN:
      state = action.user;
      return state;
    case actionTypes.USER_SIGN_OUT:
      state = action.user;
      return state;
    default:
      return state;
  }
};

export default user;

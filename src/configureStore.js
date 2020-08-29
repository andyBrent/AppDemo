import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from '../src/common/middleware/logger';

import todoItem from './edit/reducer';
import memorialDay from './day/reducer';
import user from './login/reducer';

const rootReducer = combineReducers({
  todoItem,
  memorialDay,
  user,
});

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const store = createStore(rootReducer, undefined, middlewareEnhancer);

export default store;

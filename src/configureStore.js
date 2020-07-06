import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from '../src/common/middleware/logger';

import todoItem from './edit/reducer';
import memorialDay from './day/reducer';

const rootReducer = combineReducers({
  todoItem,
  memorialDay,
});

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const store = createStore(rootReducer, undefined, middlewareEnhancer);

export default store;

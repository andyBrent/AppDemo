import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from '../src/common/middleware/logger';

import todoItem from './edit/reducer';

const rootReducer = combineReducers({
  todoItem,
  // listReducer,
});

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const store = createStore(rootReducer, undefined, middlewareEnhancer);

export default store;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './Countries/Countries';

const rootReducer = combineReducers({
  Countries: countriesReducer,
});

const store = createStore(
  rootReducer, applyMiddleware(thunk, logger),
);

export default store;

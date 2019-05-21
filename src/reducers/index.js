import { combineReducers } from 'redux';
import test from './test';
import { connectRouter } from 'connected-react-router'
 
export default (history) => combineReducers({
  router: connectRouter(history),
  test

})
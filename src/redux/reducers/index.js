import { combineReducers } from 'redux';
import items from './ItemReducer';

const allReducers = {
  items: items
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;

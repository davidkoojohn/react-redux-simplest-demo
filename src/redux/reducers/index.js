import { combineReducers } from 'redux';
import reducerSample from './reducer-sample';

const allReducers = {
  reducerSample: reducerSample
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;

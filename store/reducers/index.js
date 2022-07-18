import { combineReducers } from 'redux';
import authReducer from './auth';
import salesManagerReducer from './salesManager';
import brandManagerReducer from './brandManager';

const appReducer = combineReducers({
  auth: authReducer,
  salesManager: salesManagerReducer,
  brandManager: brandManagerReducer,
});

export default appReducer;

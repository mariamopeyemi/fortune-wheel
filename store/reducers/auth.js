import { authState } from '../initialStates';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CLEAR_ALERT,
  SET_ALERT,
} from '../actions/actionTypes';

const reducer = (state = authState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, isLoading: false };
    case LOGIN_FAILED:
      return {
        ...state,
        alertMessage: action.payload,
        isLoading: false,
      };
    case CLEAR_ALERT:
      return {
        ...state,
        alert: false,
        alertMessage: '',
        isLoading: false,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: true,
        alertMessage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

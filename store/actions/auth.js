import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CLEAR_ALERT,
  SET_ALERT,
} from './actionTypes';
import axios from 'axios';
import { setAuthToken, setUser } from '../../utils/helpers.js';
import toast, { Toaster } from 'react-hot-toast';

export const login = ({ credentials, router, alert }) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_START,
    });
    try {
      const response = await axios.post(
        `https://gateway.shoutng.com/v1/auth/login`,
        credentials
      );
      const { user, token } = response.data.data;
      setAuthToken(token);
      setUser(user);
      toast.success('Login Successful! Welcome');
      // alert({ alertMessage: 'Login Successful! Welcome' });
      router.push('/auth/verification');
      // dispatch({
      //   type: LOGIN_SUCCESS,
      //   payload: user,
      // });
    } catch (err) {
      console.log(err);
      dispatch({
        type: LOGIN_FAILED,
      });
      if (err.response.data) {
        const { error } = err.response.data;
        if (error.verifier) {
          toast.error(error.verifier);
        } else if (error.password) {
          toast.error(error.password);
        } else {
          toast.error(error);
        }
      } else {
        console.log('last');
        toast.error('Connection Error! Please check your internet');
      }

      // if (!error.response) {
      //   console.log('No response from the server');
      //   toggleAlertBar(
      //     'No server response. Please Check Your internet connection',
      //     'fail',
      //     true
      //   );
      //   return;
      //   // setError("Network Error");
      // }
      // if (error.response.data.statusCode === 401) {
      //   console.log('response error', error.response);
      //   setPassError('Email or Password is incorrect');
      // } else {
      //   toggleAlertBar('An Error Occurred', 'fail', true, 7000);
      // }
    }
  };
};

export const clearAlert = () => {
  return async (dispatch) => {
    dispatch({
      type: CLEAR_ALERT,
    });
  };
};

export const setAlert = ({ alertMessage }) => {
  return async (dispatch) => {
    dispatch({
      type: SET_ALERT,
      payload: alertMessage,
    });
    clearAlert();
  };
};

import axios from 'axios';
import { authFetch } from '../../utils/axios';
import toast, { Toaster } from 'react-hot-toast';

import {
  CREATE_BRANDS_START,
  CREATE_BRANDS_SUCCESS,
  CREATE_BRANDS_FAILED,
  GET_BRANDS_START,
  GET_BRANDS_FAILED,
  GET_ALL_BRANDS_SUCCESS,
  GET_ALL_ADVERTS_SUCCESS,
} from './actionTypes';

// export const createBrands = () => {
// 	return async (dispatch) => {
// 		dispatch({
// 			type: CREATE_BRANDS_START,
// 		});
// 		try {
// 			const response = await authFetch.post
// 			console.log(response);
//
// 			console.log(data);
// 			dispatch({
// 				type: CREATE_BRANDS_SUCCESS,
// 				payload: data,
// 			});
// 		} catch (error) {
// 			console.log(error);
// 			dispatch({
// 				type: CREATE_BRANDS_FAILED,
// 			});

// 		}
// 	};
// };

export const getAllBrands = ({ size, currentPage }) => {
  return async (dispatch) => {
    dispatch({
      type: GET_BRANDS_START,
    });
    try {
      const response = await authFetch.get(
        `/brand/get-all?size=${size}&page=${currentPage}`
      );
      console.log(response);
      const { data, meta } = response.data;
      console.log(data);
      dispatch({
        type: GET_ALL_BRANDS_SUCCESS,
        payload: { data, meta },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_BRANDS_FAILED,
      });
      if (err.response.data) {
        const { error } = err.response.data;
        toast.error(error);
      } else {
        toast.error('Connection Error! Please check your internet');
      }
    }
  };
};

export const getAllAdverts = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_BRANDS_START,
    });
    try {
      const response = await authFetch.get(`/advert/get_all`);
      console.log(response);
      const { data } = response.data;
      console.log(data);
      dispatch({
        type: GET_ALL_ADVERTS_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_BRANDS_FAILED,
      });
      if (err.response.data) {
        const { error } = err.response.data;
        toast.error(error);
      } else {
        toast.error('Connection Error! Please check your internet');
      }
    }
  };
};

export const createAdvert = ({ details }) => {
  return async (dispatch) => {
    dispatch({
      type: GET_BRANDS_START,
    });
    try {
      const response = await authFetch.post(`/advert/create`, details);
      console.log(response);
      const { data } = response.data;
      console.log(data);
      dispatch({
        type: GET_ALL_ADVERTS_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_BRANDS_FAILED,
      });
      if (err.response.data) {
        const { error } = err.response.data;
        toast.error(error);
      } else {
        toast.error('Connection Error! Please check your internet');
      }
    }
  };
};

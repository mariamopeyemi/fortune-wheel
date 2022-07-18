import toast, { Toaster } from 'react-hot-toast';
import {
  GET_LINKS_START,
  GET_LINKS_SUCCESS,
  GET_LINKS_FAILED,
  CREATE_LINKS_START,
  CREATE_LINKS_SUCCESS,
  CREATE_LINKS_FAILED,
  GET_BRANDS_START,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILED,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_END,
  GET_SINGLE_BRAND_SUCCESS,
  DELETE_PRODUCT_BEGIN,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  SET_EDIT,
  UPDATE_PRODUCT_BEGIN,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  CREATE_CONSUMER_BEGIN,
  GET_CONSUMERS_BEGIN,
  GET_CONSUMERS_SUCCESS,
  GET_CONSUMERS_FAILED,
  SEND_MESSAGE_BEGIN,
  SEND_MESSAGE_FAILED,
  SEND_BULK_MESSAGE_BEGIN,
  SEND_BULK_MESSAGE_FAILED,
  TOGGLE_LOADING,
  CLAIM_COUPON_BEGIN,
  CLAIM_COUPON_SUCCESS,
  CLAIM_COUPON_FAILED,
} from './actionTypes';
import { authFetch } from '../../utils/axios';

export const getLinks = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_LINKS_START,
    });
    try {
      const response = await authFetch.post('/sales-management/product/all');
      const { data } = response.data.data;
      dispatch({
        type: GET_LINKS_SUCCESS,
        payload: data,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_LINKS_FAILED,
      });
      if (error?.response?.data) {
        const { error } = error.response.data;
        toast.error(error);
      } else {
        toast.error('Connection Error! Please check your internet');
      }
    }
  };
};

export const createLinks = ({ details, router }) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_LINKS_START,
    });
    try {
      const response = await authFetch.post(
        '/sales-management/product/create',
        details
      );
      const { data } = response.data;
      dispatch({
        type: CREATE_LINKS_SUCCESS,
        payload: data.link,
      });
      // try {
      //   const res = await axios(
      //     `https://api.shrtco.de/v2/shorten?url=${data.link}`
      //   );
      //   console.log('yes');
      //   dispatch({
      //     type: CREATE_LINKS_SUCCESS,
      //     payload: res.data.result.full_short_link,
      //   });
      //   // console.log(res);
      //   // setIsLoading(false);
      // } catch (error) {
      //   console.log(error);
      //   // setNewLink(link);
      //   // setIsLoading(false);
      //   dispatch({
      //     type: CREATE_LINKS_SUCCESS,
      //     payload: data.link,
      //   });
      // }
      // dispatch({
      //   type: CREATE_LINKS_SUCCESS,
      //   payload: data.link,
      // });

      router.push('/create/success');
    } catch (error) {
      console.log(error);
      dispatch({
        type: CREATE_LINKS_FAILED,
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

export const updateProduct = ({ updateDetails, router, setUpdated }) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_PRODUCT_BEGIN,
    });
    try {
      const response = await authFetch.post(
        '/sales-management/product/update',
        updateDetails
      );

      const { data } = response.data;
      dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
      });
      if (router.pathname === '/messages/[edibles]') {
        setUpdated(true);
      } else {
        router.push('/edit/successedit');
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: UPDATE_PRODUCT_FAILED,
      });
      if (error.response.data) {
        const { error } = error.response.data;
        if (error.response.data) {
          const { error } = error.response.data;
          toast.error(error);
        } else {
          toast.error('Connection Error! Please check your internet');
        }
      } else {
        console.log('last');
        toast.error('Connection Error! Please check your internet');
      }
    }
  };
};

export const getBrands = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_BRANDS_START,
    });
    try {
      const response = await authFetch.get('/brand/get-all');
      console.log(response);
      const { data } = response.data;
      console.log(data);
      dispatch({
        type: GET_BRANDS_SUCCESS,
        payload: data,
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

export const getSingleBrand = ({ id }) => {
  return async (dispatch) => {
    dispatch({
      type: GET_BRANDS_START,
    });
    try {
      const response = await authFetch.get('/brand/get-id', { id });
      console.log(response);
      const { data } = response.data;
      console.log(data);
      dispatch({
        type: GET_SINGLE_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_BRANDS_FAILED,
      });
    }
  };
};

export const getSingleProduct = ({ id }) => {
  return async (dispatch) => {
    dispatch({
      type: GET_SINGLE_PRODUCT_BEGIN,
    });
    try {
      const response = await authFetch.post('/sales-management/product/id', {
        id,
      });
      console.log(response);
      const { data } = response.data;
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: { data, id },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_SINGLE_PRODUCT_END,
      });
    }
  };
};

export const deleteProduct = ({ id }) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT_BEGIN,
    });
    try {
      const response = await authFetch.post('/sales-management/product/del', {
        id,
      });
      console.log(response);
      const { data } = response.data;
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: DELETE_PRODUCT_FAILED,
      });
    }
  };
};

export const toggleEditing = ({ value }) => {
  return async (dispatch) => {
    dispatch({
      type: SET_EDIT,
      payload: value,
    });
  };
};

export const createConsumer = ({ consumer, router }) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_CONSUMER_BEGIN,
    });
    try {
      const response = await authFetch.post(
        '/sales-management/consumer/create',
        consumer
      );
      console.log(response);
      router.push('/generatedEdible/Congratulation');
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong');
      }
    }
  };
};

export const getConsumers = ({ productId }) => {
  return async (dispatch) => {
    dispatch({
      type: GET_CONSUMERS_BEGIN,
    });
    try {
      const response = await authFetch.post(
        '/sales-management/consumer/productId',
        { productId }
      );
      const { data } = response.data;
      dispatch({
        type: GET_CONSUMERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_CONSUMERS_FAILED,
      });
    }
  };
};

export const sendMessage = ({ details, setSent }) => {
  return async (dispatch) => {
    dispatch({
      type: SEND_MESSAGE_BEGIN,
    });
    try {
      const response = await authFetch.post('/notify/mail', details);
      // const response = await authFetch.post(
      //   '/sales-management/message/create',
      //   details
      // );
      const { data } = response.data;
      console.log(response);
      setSent(true);
      dispatch({
        type: SEND_MESSAGE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SEND_MESSAGE_FAILED,
      });
    }
  };
};

export const toggleLoading = () => {
  return async (dispatch) => {
    dispatch({
      type: TOGGLE_LOADING,
    });
  };
};

export const claimCoupon = ({ couponCode, router }) => {
  return async (dispatch) => {
    dispatch({
      type: CLAIM_COUPON_BEGIN,
    });
    try {
      const response = await authFetch.post(
        'sales-management/consumer/coupon',
        {
          couponCode,
        }
      );
      console.log(response);
      const { data } = response.data;
      console.log(data);
      dispatch({
        type: CLAIM_COUPON_SUCCESS,
        payload: data,
      });
      router.push('/generatedEdible/CouponEligible');
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong');
      }
    }
  };
};

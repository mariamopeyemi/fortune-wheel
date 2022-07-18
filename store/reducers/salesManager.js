import { salesManagerState } from '../initialStates';
import {
  GET_LINKS_SUCCESS,
  GET_LINKS_START,
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
  SET_EDIT,
  GET_CONSUMERS_SUCCESS,
  TOGGLE_LOADING,
  CLAIM_COUPON_SUCCESS,
} from '../actions/actionTypes';

const reducer = (state = salesManagerState, action) => {
  switch (action.type) {
    case GET_LINKS_START:
      return { ...state, isLoading: true };
    case GET_LINKS_SUCCESS:
      return { ...state, isLoading: false, shoutLinks: action.payload };
    case GET_LINKS_FAILED:
      return { ...state, isLoading: false };
    case CREATE_LINKS_START:
      return { ...state, isLoading: true };
    case CREATE_LINKS_SUCCESS:
      return { ...state, isLoading: false, link: action.payload };
    case CREATE_LINKS_FAILED:
      return { ...state, isLoading: false };
    case GET_BRANDS_START:
      return { ...state, isLoading: true };
    case GET_BRANDS_SUCCESS:
      return { ...state, isLoading: false, brands: action.payload };
    case GET_BRANDS_FAILED:
      return { ...state, isLoading: false };
    case GET_SINGLE_PRODUCT_BEGIN:
      return { ...state, isLoading: true };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: action.payload.data[0],
        singleProductId: action.payload.id,
        isLoading: false,
      };
    case GET_SINGLE_PRODUCT_END:
      return { ...state, isLoading: false };
    case GET_SINGLE_BRAND_SUCCESS:
      return { ...state, singleBrand: action.payload, isLoading: false };
    case SET_EDIT:
      return { ...state, isEditing: action.payload };
    case GET_CONSUMERS_SUCCESS:
      return { ...state, consumers: action.payload };
    case TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading };
    case CLAIM_COUPON_SUCCESS:
      return { ...state, couponDetails: action.payload };
    default:
      return state;
  }
};

export default reducer;

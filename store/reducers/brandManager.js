import { brandManagerState } from '../initialStates';
import {
  CREATE_BRANDS_START,
  CREATE_BRANDS_SUCCESS,
  CREATE_BRANDS_FAILED,
  GET_ALL_BRANDS_SUCCESS,
} from '../actions/actionTypes';

const reducer = (state = brandManagerState, action) => {
  switch (action.type) {
    // case CREATE_BRANDS_START:
    //   return { ...state, isLoading: true };
    // case CREATE_BRANDS_SUCCESS:
    //   return { ...state, isLoading: false };
    // case CREATE_BRANDS_FAILED:
    //   return { ...state, isLoading: false , error: "Brand creation failed."};
    case GET_ALL_BRANDS_SUCCESS:
      const { data, meta } = action.payload;
      return {
        ...state,
        brands: data,
        totalPages: meta.totalPages,
        totalBrands: meta.length,
      };
    default:
      return state;
  }
};

export default reducer;

import actionTypes from "../constant/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case actionTypes.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case actionTypes.FETCH_ITEMS_ERROR:
      return {
        ...state,
        isError: true
      };
    case actionTypes.CLEAR_ITEMS:
      return initialState;
    default:
      return state;
  }
};

import actionTypes from "../constant/actionTypes";

const initialState = {
  isLoading: true,
  isError: false,
  data: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEM:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case actionTypes.FETCH_ITEM_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case actionTypes.FETCH_ITEM_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case actionTypes.CLEAR_ITEM:
      return initialState;
    default:
      return state;
  }
};

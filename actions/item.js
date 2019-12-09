import { useDispatch } from "react-redux";
import actionTypes from "../constant/actionTypes";

const url = `/api/items/`;

export default () => {
  const dispatch = useDispatch();

  const loading = () =>
    dispatch({
      type: actionTypes.FETCH_ITEM
    });

  const succces = payload =>
    dispatch({
      type: actionTypes.FETCH_ITEM_SUCCESS,
      payload
    });

  const error = () =>
    dispatch({
      type: actionTypes.FETCH_ITEM_ERROR
    });

  const clear = () =>
    dispatch({
      type: actionTypes.CLEAR_ITEM
    });
  const find = q => {
    loading();
    fetch(`${url}${q}`)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(succces)
      .catch(error);
  };
  return { clear, find };
};

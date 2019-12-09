import { useDispatch } from "react-redux";
import actionTypes from "../constant/actionTypes";

const url = `/api/items?q=`;

export default () => {
  const dispatch = useDispatch();

  const loading = () =>
    dispatch({
      type: actionTypes.FETCH_ITEMS
    });

  const succces = payload =>
    dispatch({
      type: actionTypes.FETCH_ITEMS_SUCCESS,
      payload
    });

  const error = () =>
    dispatch({
      type: actionTypes.FETCH_ITEMS_ERROR
    });

  const clear = () =>
    dispatch({
      type: actionTypes.CLEAR_ITEMS
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

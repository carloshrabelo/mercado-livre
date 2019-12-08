import { useDispatch } from "react-redux";

const url = `/api/items?q=`;

export default () => {
  const dispatch = useDispatch();

  const loading = () =>
    dispatch({
      type: "FETCH_ITEMS"
    });

  const succces = payload =>
    dispatch({
      type: "FETCH_ITEMS_SUCCESS",
      payload
    });

  const error = () =>
    dispatch({
      type: "FETCH_ITEMS_ERROR"
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
  return { find };
};

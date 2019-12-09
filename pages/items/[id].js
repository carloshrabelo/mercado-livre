import { useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";

import actionItem from "../../actions/item";
import withContent from "../../hoc/withContent";
import ItemDetail from "../../components/ItemDetail";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isError, isLoading } = useSelector(({ item }) => item);
  const { clear, find } = actionItem();
  const product = data.item || [];

  useEffect(() => {
    find(id);
    return clear;
  }, []);

  return withContent(ItemDetail)({ ...product, isError, isLoading });
};

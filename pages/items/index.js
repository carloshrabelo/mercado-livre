import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";

import actionItems from "../../actions/items";
import withContent from "../../hoc/withContent";
import Items from "../../components/Items";

export default () => {
  const router = useRouter();
  const { search } = router.query;

  const { data, isError, isLoading } = useSelector(({ items }) => items);
  const { clear, find } = actionItems();
  const products = data.items || [];

  useEffect(() => {
    find(search);
    return clear;
  }, [search]);
  return withContent(Items)({ data, isError, isLoading, products });
};

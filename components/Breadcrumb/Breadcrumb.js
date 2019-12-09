import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import styles from "./Breadcrumb.scss";

export const Breadcrumb = ({ categories }) => (
  <nav className={styles.breadcrumb}>
    {categories.map((categorie, index) => (
      <span className={styles.item} key={index}>
        {categorie}
      </span>
    ))}
  </nav>
);

Breadcrumb.defaultProps = {
  categories: []
};

Breadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default () => {
  const { items, item } = useSelector(state => state);
  return (
    <Breadcrumb categories={item.data.categories || items.data.categories} />
  );
};

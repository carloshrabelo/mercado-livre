import React from "react";
import PropTypes from "prop-types";
import Detail from "./Detail";

import styles from "./Items.scss";

const Items = ({ products }) =>
  products.length ? (
    <section className={styles.products}>
      {products.map(product => (
        <Detail key={product.id} {...product} />
      ))}
    </section>
  ) : (
    <h1>No se encontraron registros.</h1>
  );

Items.defaultProps = {
  products: []
};

Items.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      condition: PropTypes.string.isRequired,
      free_shipping: PropTypes.bool.isRequired,
      price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        decimals: PropTypes.number.isRequired
      })
    })
  ).isRequired
};

export default Items;

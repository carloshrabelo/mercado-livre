import React from "react";
import PropTypes from "prop-types";

import styles from "./ItemDetail.scss";

const CONDITIONS = {
  new: "Nuevo",
  nuevo: "Nuevo",
  used: "Usado"
};

export const ItemDetail = ({
  picture,
  condition,
  sold_quantity,
  title,
  price,
  description
}) => {
  return (
    <section className={styles.detail}>
      <img className={styles.img} src={picture} alt="product" />
      <div>
        <span className={styles.caption}>
          {`${CONDITIONS[condition]} - ${sold_quantity} vendidos`}
        </span>
        <h5 className={styles.title}>{title}</h5>
        <h3 className={styles.value}>
          {`${price.currency} ${price.amount.toLocaleString("es-AR")}`}
          <span>{price.decimals || "00"}</span>
        </h3>
        <button className={styles.button}>Comprar</button>
      </div>
      <div className={styles.description}>
        <h4>Descripción del produto</h4>
        <p>{description}</p>
      </div>
    </section>
  );
};

ItemDetail.propTypes = {
  picture: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  sold_quantity: PropTypes.number.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    decimals: PropTypes.number.isRequired
  }),
  description: PropTypes.string.isRequired
};

ItemDetail.defaultProps = {
  picture: "",
  condition: "",
  sold_quantity: 0,
  price: {
    currency: "",
    amount: 0,
    decimals: 0
  },
  description: ""
};

export default ItemDetail;

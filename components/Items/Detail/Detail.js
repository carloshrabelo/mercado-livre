import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import ic_shipping from "../../../assets/img/ic_shipping.png";
import ic_shipping2x from "../../../assets/img/ic_shipping@2x.png";

import styles from "./Detail.scss";

const parseCurrency = curr => {
  let symbol;
  switch (curr) {
    case "ARS":
    case "USD":
      symbol = "$";
      break;
    case "BRL":
      symbol = "R$";
      break;
    default:
      symbol = curr;
  }
  return symbol;
};

const Detail = ({ id, picture, price, free_shipping, title, location }) => (
  <Link href={`/items/${id}`}>
    <article className={styles.article}>
      <div className={styles.flex}>
        <div className={styles.img}>
          <img src={picture} alt="product" />
        </div>
        <div className={styles.info}>
          <h3>
            {`${parseCurrency(price.currency)} ${price.amount.toLocaleString(
              "es-AR"
            )}`}
            {free_shipping && (
              <img
                src={ic_shipping}
                srcSet={`${ic_shipping2x} 2x`}
                alt="shipping status"
              />
            )}
          </h3>
          <p>{title}</p>
        </div>
        <div className={styles.location}>{location}</div>
      </div>
    </article>
  </Link>
);

Detail.propTypes = {
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired,
  free_shipping: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default Detail;

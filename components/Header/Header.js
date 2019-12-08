import React, { useState } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import Logo_ML from "../../assets/img/Logo_ML.png";
import Logo_ML2x from "../../assets/img/Logo_ML@2x.png";
import ic_Search from "../../assets/img/ic_Search.png";
import ic_Search2x from "../../assets/img/ic_Search@2x.png";

import styles from "./Header.scss";

export const Header = () => {
  const [search, setSearch] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    Router.push(`/items?search=${search}`);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img
            src={Logo_ML}
            srcSet={`${Logo_ML2x} 2x`}
            alt="logo"
            className={styles.img}
          />
        </a>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.fieldset}>
            <input
              className={styles.input}
              type="search"
              placeholder="Nunca dejes de buscar"
              onChange={e => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit" className={styles.button}>
              <img src={ic_Search} alt="search" srcSet={`${ic_Search2x} 2x`} />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import PropTypes from "prop-types";
import Logo_ML from "../../assets/img/Logo_ML.png";
import Logo_ML2x from "../../assets/img/Logo_ML@2x.png";
import ic_Search from "../../assets/img/ic_Search.png";
import ic_Search2x from "../../assets/img/ic_Search@2x.png";

import styles from "./Header.scss";
import Link from "next/link";

export const Header = ({ onSubmit, query }) => {
  const [search, setSearch] = useState(query);
  const handdleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>
          <Link href="/">
            <img
              src={Logo_ML}
              srcSet={`${Logo_ML2x} 2x`}
              alt="logo"
              className={styles.logo}
            />
          </Link>
        </span>
        <form onSubmit={handdleSubmit} className={styles.form}>
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

Header.defaultProps = {
  query: ""
};

Header.prototype = {
  onSubmit: PropTypes.func,
  query: PropTypes.string
};

export default () => {
  const router = useRouter();
  const { search } = router.query;
  const onSubmit = query => Router.push(`/items?search=${query}`);
  return <Header onSubmit={onSubmit} query={search} />;
};

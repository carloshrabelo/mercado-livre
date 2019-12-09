import React from "react";
import App from "next/app";
import Breadcrumb from "../components/Breadcrumb";
import Header from "../components/Header";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import "../styles/main.scss";
import styles from "../styles/app.scss";
class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <Header />
        <div className={styles.container}>
          <Breadcrumb />
          <Component {...pageProps} />
        </div>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);

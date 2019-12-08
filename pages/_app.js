import React from "react";
import App from "next/app";
import Header from "../components/Header";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import "../styles/main.scss";
class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);

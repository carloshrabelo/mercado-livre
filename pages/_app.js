import React from "react";
import App from "next/app";
import Header from "../components/Header";
import "../styles/main.scss";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header>a</Header>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;

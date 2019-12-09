import PropTypes from "prop-types";

import React from "react";
import Loader from "../components/Loader";

export default Component => {
  const withContent = ({ isLoading, isError, ...props }) => {
    if (isLoading) return <Loader />;
    if (isError) return <h1>Hubo un problema con la solicitud.</h1>;
    return <Component {...props} />;
  };

  withContent.defaultProps = {
    isLoading: false,
    isError: false
  };

  withContent.propTypes = {
    isLoading: PropTypes.bool,
    isError: PropTypes.bool
  };

  return withContent;
};

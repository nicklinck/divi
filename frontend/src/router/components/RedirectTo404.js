import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RedirectTo404 = ({ location }) => {
  return <Navigate to={Object.assign({}, location, { state: { is404: true } })} />;
};

RedirectTo404.propTypes = {
  location: PropTypes.object,
};

export default RedirectTo404;

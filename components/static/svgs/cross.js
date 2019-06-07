import React from 'react';
import PropTypes from 'prop-types';

const Cross = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" /></svg>
);

Cross.propTypes = {
  className: PropTypes.string,
};

Cross.defaultProps = {
  className: '',
};

export default Cross;

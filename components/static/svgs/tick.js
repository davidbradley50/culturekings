import React from 'react';
import PropTypes from 'prop-types';

const Tick = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" /></svg>
);

Tick.propTypes = {
  className: PropTypes.string,
};

Tick.defaultProps = {
  className: '',
};

export default Tick;

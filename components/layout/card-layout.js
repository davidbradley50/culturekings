import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardLayout = ({ children }) => (
  <Block>
    {children}
  </Block>
);

CardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardLayout;

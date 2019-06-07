import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import theme from '@app/library/theme';

const Block = styled.div`
  margin: 0 auto;
  max-width: ${theme('widths.alfa')};
  width: 100%;
  padding: 0 16px;

  ${props => props.width && css`
    max-width: ${theme(`widths.${props.width}`)};
  `}
`;

const Container = ({
  children, width,
}) => (
  <Block width={width}>
    {children}
  </Block>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};

Container.defaultProps = {
  width: null,
};

export default Container;

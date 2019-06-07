import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { has } from 'ramda';
import theme from '@app/library/theme';

const Block = styled.div`
  background-color: transparent;
  color: inherit;
  padding-bottom: 0;
  padding-top: 0;
  width: 100%;

  ${props => props.bg && css`
    background-color: ${theme(`colors.${props.bg}`)};
  `}

  ${props => props.fg && css`
    color: ${theme(`colors.${props.fg}`)};
  `}

  ${props => has('default', props.top) && css`
    padding-top: ${theme(`spaces.${props.top.default}`)};
  `}

  ${props => has('default', props.bottom) && css`
    padding-bottom: ${theme(`spaces.${props.bottom.default}`)};
  `}

  ${props => has('medium', props.top) && css`
    @media screen and (min-width: ${theme('breakpoints.medium')}) {
      padding-top: ${theme(`spaces.${props.top.medium}`)};
    }
  `}

  ${props => has('medium', props.bottom) && css`
    @media screen and (min-width: ${theme('breakpoints.medium')}) {
      padding-bottom: ${theme(`spaces.${props.bottom.medium}`)};
    }
  `}
`;

const Section = ({
  children, top, bottom, bg, fg, id,
}) => (
  <Block id={id} top={top} bottom={bottom} bg={bg} fg={fg}>
    {children}
  </Block>
);

Section.propTypes = {
  top: PropTypes.shape({}),
  bottom: PropTypes.shape({}),
  fg: PropTypes.string,
  bg: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  top: {},
  bottom: {},
  fg: null,
  bg: null,
  id: null,
};

export default Section;

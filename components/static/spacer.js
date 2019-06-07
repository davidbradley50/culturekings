import styled, { css } from 'styled-components';
import theme from '@app/library/theme';
import PropTypes from 'prop-types';

const Spacer = styled.div`
  ${props => props.top && css`
    padding-top: ${theme(`spaces.${props.top}`)};
  `}

  ${props => props.bottom && css`
    padding-bottom: ${theme(`spaces.${props.bottom}`)};
  `}
`;

Spacer.propTypes = {
  top: PropTypes.string,
  bottom: PropTypes.string,
};

Spacer.defaultProps = {
  top: '',
  bottom: '',
};

export default Spacer;

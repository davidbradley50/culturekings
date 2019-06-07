import React from 'react';
import styled from 'styled-components';
import theme from '@app/library/theme';
import PropTypes from 'prop-types';
import {
  Logo, AutoComplete,
} from '@app/components/static/index';

const Block = styled.div`
  ${theme('textStyles.bravo')}
`;

const Header = ({ items, runFilter }) => (
  <Block>
    <Logo />
    <AutoComplete items={items} runFilter={runFilter} />
  </Block>
);

Header.propTypes = {
  items: PropTypes.node.isRequired,
  runFilter: PropTypes.func.isRequired,
};

export default Header;

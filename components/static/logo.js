import React from 'react';
import styled from 'styled-components';
import CultureKingsLogo from '@app/components/static/svgs/culture-kings-logo';

const Block = styled.div`
  width: 100%;
  text-align: center;
`;

const Logo = () => (
  <Block>
    <CultureKingsLogo />
  </Block>
);

export default Logo;

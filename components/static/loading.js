import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  margin-top: 40px;
  text-align: center;
  width: 100%;
`;

const Text = styled.p`
  font-size: 40px;
`;

const Logo = () => (
  <Block>
    <Text>Loading...</Text>
  </Block>
);

export default Logo;

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '@app/components/static/index';

storiesOf('Card', module)
  .add('card fork', () => (
    <Card
      name="AFTERPAY"
      created="2016-08-22T00:15:31Z"
      description="PHP AFTERPAY INTEGRATION EXPOSING THE MERCHANT AND INSTORE APIS"
      fork
      stargazers="https://api.github.com/repos/culturekings/afterpay/stargazers"
      github="https://github.com/culturekings/afterpay"
    />
  ))
  .add('card not fork', () => (
    <Card
      name="AFTERPAY"
      created="2016-08-22T00:15:31Z"
      description="PHP AFTERPAY INTEGRATION EXPOSING THE MERCHANT AND INSTORE APIS"
      stargazers="https://api.github.com/repos/culturekings/afterpay/stargazers"
      github="https://github.com/culturekings/afterpay"
    />
  ));

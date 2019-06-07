import { css } from 'styled-components';

const theme = {
  colors: {
    alfa: '#000000',
    bravo: '#ffffff',
  },
  textStyles: {
    alfa: css`
      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.5px;
    `,
    bravo: css`
      font-family: 'Roboto';
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 1px;
      text-transform: uppercase;
    `,
    charlie: css`
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 20px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    `,
  },
  spaces: {
    alfa: '30px',
    bravo: '15px',
    charlie: '10px',
    echo: '5px',
  },
  breakpoints: {
    extraSmall: '400px',
    small: '576px',
    medium: '768px',
    large: '992px',
    huge: '1600px',
  },
  widths: {
    alfa: '1440px',
    bravo: '900px',
    charlie: '700px',
    delta: '850px',
    echo: '1200px',
    foxtrot: '1050px',
  },
  easings: {
    alfa: 'cubic-bezier(.46,.03,.52,.96)', // quintic
  },
};

export default theme;

import { configure, addDecorator } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@app/components/global-styles';
import theme from '@app/components/theme';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withBackgrounds([
    { name: 'Example Black', value: '#212121' },
    { name: 'Example White', value: '#FAFAFA', default: true },
  ])
);

addDecorator(storyFn => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      {storyFn()}
    </ThemeProvider>
  </div>
));

configure(loadStories, module);

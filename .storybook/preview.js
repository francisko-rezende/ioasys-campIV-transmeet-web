import React from 'react';

import GlobalStyles from '../src/styles/GlobalStyles'

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyles />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

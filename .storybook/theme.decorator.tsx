import React from 'react';
import GlobalStyles from '../src/styles/global-styles';
import { AppThemeProvider } from '../src/utils/app-theme-provider';

export const themeDecorator = (Story, ctx) => {
  const { theme } = ctx?.globals;

  return (
    <AppThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </AppThemeProvider>
  );
};

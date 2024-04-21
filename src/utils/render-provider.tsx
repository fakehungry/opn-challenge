import React from 'react';
import { render } from '@testing-library/react';
import { AppThemeProvider } from './app-theme-provider';
import { ThemeMode } from './theme-context';

// REMARK: Test only light mode
export const renderProvider = (props: any) => {
  return render(
    <AppThemeProvider theme={ThemeMode.LIGHT}>{props}</AppThemeProvider>,
  );
};

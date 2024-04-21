import { useEffect, useState } from 'react';
import { ThemeContext, ThemeMode } from './theme-context';
import lightTheme from '../styles/light-theme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/styled-component-theme';
import darkTheme from '../styles/dark-theme';

type AppThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
  theme?: ThemeMode;
};

const getThemeFromLocalStorage = () =>
  window.localStorage.getItem('theme') || ThemeMode.LIGHT;

const setThemeToLocalStorage = (theme: ThemeMode) =>
  window.localStorage.setItem('theme', theme);

export const AppThemeProvider = (props: AppThemeProviderProps) => {
  const { children, theme: themeProp } = props;
  const [themeMode, setThemeMode] = useState<ThemeMode | null>(null);
  const colors = themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme;

  useEffect(() => {
    if (themeProp) {
      setThemeMode(themeProp);
    } else if (themeMode === null) {
      setThemeMode(getThemeFromLocalStorage() as ThemeMode);
      return;
    }

    setThemeToLocalStorage(themeMode as ThemeMode);
  }, [themeMode, themeProp]);

  return (
    <ThemeContext.Provider
      value={{ themeMode: themeMode as ThemeMode, theme: colors, setThemeMode }}
    >
      <ThemeProvider theme={{ ...theme, colors: colors }}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

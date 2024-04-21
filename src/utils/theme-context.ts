import { Dispatch, SetStateAction, createContext } from 'react';
import lightTheme from '../styles/light-theme';

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  themeMode: ThemeMode;
  theme: typeof lightTheme;
  setThemeMode: Dispatch<SetStateAction<ThemeMode | null>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: ThemeMode.LIGHT,
  theme: lightTheme,
  setThemeMode: () => {},
});

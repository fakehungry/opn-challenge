import { Theme } from '../styles/styled-component-theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

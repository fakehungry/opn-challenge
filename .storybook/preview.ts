import type { Preview } from '@storybook/react';

import { themeDecorator } from './theme.decorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: ['light', 'dark'],
      dynamicTitle: true,
    },
  },
};

export const decorators = [themeDecorator];

export default preview;

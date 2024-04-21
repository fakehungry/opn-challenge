import type { Meta, StoryObj } from '@storybook/react';

import Radio, { RadioProps } from '.';

const meta: Meta<RadioProps> = {
  component: Radio,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<RadioProps>;

export const Default: Story = {
  args: {
    label: 'Radio',
  },
};

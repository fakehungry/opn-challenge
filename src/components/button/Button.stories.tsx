import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Button',
    onClick: () => alert('Button clicked'),
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import Card, { CardProps } from '.';

const meta: Meta<CardProps> = {
  component: Card,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    place: 'Baan Kru Noi',
    imgsrc: '/images/baan-kru-noi.jpg',
    imgalt: 'Baan Kru Noi',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import CardItem from '.';

const meta: Meta<typeof CardItem> = {
  title: 'Features/CardList/CardItem',
  component: CardItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardItem>;

export const Default: Story = {
  args: {
    name: 'Pikachu',
    imageUrl: '/images/snorlax.jpg',
  },
};

export const WithoutImage: Story = {
  args: {
    name: 'Snorlax',
  },
};

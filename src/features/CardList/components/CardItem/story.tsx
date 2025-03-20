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
    collectionNumber: '25/102',
    collectionName: 'Base Set',
    rarity: 'Rare',
    marketPrice: 100,
    imageUrl: '/images/snorlax.jpg',
  },
};

export const NoPrice: Story = {
  args: {
    name: 'Snorlax',
    collectionNumber: '27/102',
    collectionName: 'Base Set',
    rarity: 'Rare',
    imageUrl: '/images/snorlax.jpg',
  },
};

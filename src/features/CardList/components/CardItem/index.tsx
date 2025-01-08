import { Paper } from '@mantine/core';

interface CardItemProps {
  name: string;
  imageUrl: string;
}

export default function CardItem({ name, imageUrl }: CardItemProps) {
  return (
    <Paper shadow='xs' p='xl'>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className='w-16 h-16 object-cover rounded-md mr-4'
        />
      )}
      <h4 className='text-lg font-semibold'>{name}</h4>
    </Paper>
  );
}

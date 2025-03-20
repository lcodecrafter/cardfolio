import { Paper } from '@mantine/core';
import Image from 'next/image';

interface CardItemProps {
  name: string;
  collectionNumber: string;
  collectionName: string;
  rarity: string;
  marketPrice?: number;
  imageUrl: string;
}

export default function CardItem({
  name,
  imageUrl,
  collectionNumber,
  collectionName,
  rarity,
  marketPrice,
}: CardItemProps) {
  return (
    <Paper shadow='xs' p='sm' className='flex w-fit gap-3'>
      <div className='relative w-32 h-40'>
        <Image
          src={imageUrl}
          alt={name}
          layout='fill'
          objectFit='contain'
          className='rounded-lg'
        />
      </div>
      <div>
        <p className='text-lg font-semibold'>
          {name} - {collectionNumber}
        </p>
        <p className='text-gray-500'>{collectionName}</p>
        <p className='text-gray-500'>{rarity}</p>
        <p className='text-lg font-semibold'>{marketPrice ?? '-'}</p>
      </div>
    </Paper>
  );
}

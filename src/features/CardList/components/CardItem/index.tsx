interface CardItemProps {
  name: string;
  imageUrl: string;
}

export default function CardItem({ name, imageUrl }: CardItemProps) {
  return (
    <div className='flex items-center border rounded-lg p-4'>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className='w-16 h-16 object-cover rounded-md mr-4'
        />
      )}
      <h4 className='text-lg font-semibold'>{name}</h4>
    </div>
  );
}

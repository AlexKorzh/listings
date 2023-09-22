interface ImageContainerProps {
  imageUrl: string;
}

export const ImageContainer = ({ imageUrl }: ImageContainerProps) => {
  return (
    <div className='property-item__image-cotainer'>
      <img src={imageUrl} alt='image'/>
    </div>
  );
}
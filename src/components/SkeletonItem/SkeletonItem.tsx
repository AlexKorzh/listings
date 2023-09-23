import './skeleton-item.scss';

export const PropertyItemSkeleton = () => {
  return (
    <div className='property-item-skeleton'>
      <div className='property-item-skeleton__image-cotainer skeleton-shimmer' />
      <div className='property-item-skeleton__info'>
        <div className='property-item-skeleton__info-price skeleton-shimmer' />
        <div className='units'>
          <div className='units__item skeleton-shimmer' />
          <div className='address'>
            <div className='units__item skeleton-shimmer' />
            <div className='units__item skeleton-shimmer' />
          </div>
        </div>
      </div>
    </div>
  );
}


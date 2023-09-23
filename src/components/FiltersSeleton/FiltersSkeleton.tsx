import './filter-skeleton.scss';

export const FiltersSkeleton = () => {
  return (
    <div className='filters-skeleton'>
      <div className='title-skeleton skeleton-shimmer'></div>
      <div className='listing-count-skeleton skeleton-shimmer'></div>
      <div className='dropdown-skeleton skeleton-shimmer'></div>
    </div>
  );
}
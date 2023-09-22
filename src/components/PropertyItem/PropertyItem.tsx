import { IProperty } from '../../types';
import './property-item.scss';

import { ImageContainer } from './ImageContainer';
import { PropertyInfo } from './PropertyInfo';

interface PropertyItemProps {
  property: IProperty
}

export const PropertyItem = ({ property }: PropertyItemProps) => {
  const imageUrl = property.images[0];

  return (
    <div className='property-item'>
      <ImageContainer imageUrl={imageUrl}/>
      <PropertyInfo
        price={property.purchasePrice}
        units={property.units}
        address={property.address}
      />
    </div>
  );
}
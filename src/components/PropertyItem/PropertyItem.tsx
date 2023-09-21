import { IProperty } from '../../types';
import './property-item.scss';

import { ImageContainer } from './ImageContainer';
import { PropertyInfo } from './PropertyInfo';

interface PropertyItemProps {
  property: IProperty
}

// font-family: Graphik-Semibold;
// font-weight: 600;
// display: inline;
// font-size: 16px;
// line-height: 26px;
// color: #222;
// margin: 0;
// margin-right: 10px;

export const PropertyItem = ({ property }: PropertyItemProps) => {
  return (
    <div className='property-item'>
      <ImageContainer/>
      <PropertyInfo
        price={123}
        units={property.units}
        address={property.address}
      />
    </div>
  );
}
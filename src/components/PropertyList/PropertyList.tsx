import { IProperty } from '../../types';
import { PropertyItem } from '../PropertyItem';
import './property-list.scss';

interface PropertyListProps {
  properties: IProperty[]
}

export const PropertyList = ({ properties }: PropertyListProps) => {
  return (
    <div className='property-list'>
      {
        properties.map((property: IProperty) => {
          return (
            <PropertyItem key={property._id} property={property}/>
          );
        })
      }
    </div>
  );
}
import { IProperty } from '../../types';
import { PropertyItem } from '../PropertyItem';
import './property-list.scss';

interface PropertyListProps {
  properties: IProperty[]
}

export const PropertyList = ({ properties }: PropertyListProps) => {
  const property = properties[0];
  const property1 = properties[1];

  console.log('data property -->', property);
  console.log('data property1 -->', property1);

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


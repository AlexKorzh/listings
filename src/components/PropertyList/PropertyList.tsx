import { FixedSizeList as List } from 'react-window';
import { IProperty } from '../../types';
import { PropertyItem } from '../PropertyItem';
import './property-list.scss';

interface PropertyListProps {
  properties: IProperty[];
}

export const PropertyList = ({ properties }: PropertyListProps) => {
  const Row = ({ index, style }: any) => {
    const property = properties[index];

    return (
      <div style={{ ...style, width: 'calc(100% - 16px)' }}>
        <PropertyItem key={property._id} property={property} />
      </div>
    );
  };

  const itemHeight = 200;
  const listHeight = window.innerHeight - 78 - 180;

  return (
    <div className="list-wrapper">
      <List
        height={listHeight}
        itemCount={properties.length}
        itemSize={itemHeight}
        width='100%'
      >
        {Row}
      </List>
    </div>
  );
}
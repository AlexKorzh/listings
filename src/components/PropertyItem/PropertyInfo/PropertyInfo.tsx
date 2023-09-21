import {IAddress, IUnit} from "../../../types";
import { Unit } from './Unit';

interface PropertyInfoProps {
  price: number;
  address: IAddress;
  units: IUnit[]
}

export const PropertyInfo = ({ price, address, units }: PropertyInfoProps) => {
  const unit: IUnit  = units[0];

  return (
    <div className='property-item__info'>
      <span className='property-item__info-price'>{price}</span>
      <div className='property-item__info-units'>
        <Unit unit={unit}/>
      </div>
    </div>
  );
}
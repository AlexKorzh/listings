import {IAddress, IUnit} from "../../../types";
import { Unit } from './Unit';

interface PropertyInfoProps {
  price: number;
  address: IAddress;
  units: IUnit[]
}

export const PropertyInfo = ({ price, address, units }: PropertyInfoProps) => {
  const unit: IUnit  = units[0];
  const [address1, address2] = address.formattedAddress.split(',');

  return (
    <div className='property-item__info'>
      <span className='property-item__info-price'>${price.toLocaleString('en-US')}</span>
      <div className='units'>
        <Unit unit={unit}/>
        <div className='address'>
          <span className='units__item'>{address1}</span>
          <div>
            <span className='units__item'>{address2},</span>
            <span className='units__item'>{address.stateCode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}